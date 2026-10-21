#!/usr/bin/env bash
# Nieuwe Sleads-demo aanmaken vanuit de starter.
#
#   scripts/new-demo.sh <slug> [--deploy] [--private]
#
#   <slug>     korte bedrijfsnaam in kebab-case, bv. "bakkerij-jansen"
#              -> map /workspace/demos/<slug>-demo, repo semdejong/<slug>-demo,
#                 Vercel-project <slug>-demo  (https://<slug>-demo.vercel.app)
#   --deploy   meteen deployen naar Vercel (Hobby-scope), Git koppelen en
#              Deployment Protection uitzetten zodat de prospect zonder login kan kijken
#   --private  GitHub-repo privé maken (standaard: public; werkt allebei op Hobby)
set -euo pipefail

GH_OWNER="semdejong"
VERCEL_SCOPE="semdejongs-projects"   # Hobby-scope. NIET het Pro-team "semdejong-s-team" gebruiken.
STARTER_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DEMOS_ROOT="${DEMOS_ROOT:-$(dirname "$STARTER_DIR")}"

SLUG="${1:-}"; shift || true
DEPLOY=0; VISIBILITY="--public"
for a in "$@"; do
  case "$a" in
    --deploy) DEPLOY=1 ;;
    --private) VISIBILITY="--private" ;;
    *) echo "Onbekende optie: $a" >&2; exit 1 ;;
  esac
done

if [[ ! "$SLUG" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]]; then
  echo "Gebruik: $0 <slug> [--deploy] [--private]   (slug: kleine letters, cijfers, streepjes)" >&2
  exit 1
fi
SLUG="${SLUG%-demo}"
NAME="${SLUG}-demo"
TARGET="${DEMOS_ROOT}/${NAME}"
[[ -e "$TARGET" ]] && { echo "Bestaat al: $TARGET" >&2; exit 1; }

echo "→ Starter kopiëren naar $TARGET"
mkdir -p "$TARGET"
tar -C "$STARTER_DIR" --exclude=node_modules --exclude=.next --exclude=.git --exclude=.vercel -cf - . | tar -C "$TARGET" -xf -
cd "$TARGET"
node -e 'const f="package.json",p=require("./"+f);p.name=process.argv[1];require("fs").writeFileSync(f,JSON.stringify(p,null,2)+"\n")' "$NAME"

echo "→ npm install + build"
npm install --silent
npm run build >/dev/null

echo "→ Git init + GitHub-repo ${GH_OWNER}/${NAME} (${VISIBILITY#--})"
git init -q -b main
git add -A
git commit -qm "Demo ${NAME} vanuit sleads-demo-starter"
gh repo create "${GH_OWNER}/${NAME}" "$VISIBILITY" --source . --remote origin --push \
  --description "Concept-homepage door Sleads (demo, noindex)"

if [[ "$DEPLOY" == 1 ]]; then
  echo "→ Vercel: project ${NAME} in scope ${VERCEL_SCOPE}"
  vercel link --yes --project "$NAME" --scope "$VERCEL_SCOPE" >/dev/null
  vercel git connect "https://github.com/${GH_OWNER}/${NAME}" --yes --scope "$VERCEL_SCOPE" || \
    echo "  (Git-koppeling mislukt; deploys gaan dan alleen via 'vercel --prod')"
  echo '{"ssoProtection":null,"passwordProtection":null}' | \
    vercel api "/v9/projects/${NAME}" -X PATCH --input - --scope "$VERCEL_SCOPE" --silent
  vercel deploy --prod --yes --scope "$VERCEL_SCOPE"
  echo "→ Check: https://${NAME}.vercel.app"
  curl -sI "https://${NAME}.vercel.app" | grep -iE "^(HTTP|x-robots-tag)" || true
else
  echo "Klaar. Pas nu content.ts aan, commit + push, en deploy (zie README)."
fi
