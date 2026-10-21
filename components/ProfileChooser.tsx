import Link from "next/link";
import ProfileIcon from "@/components/ProfileIcon";
import { profileCards } from "@/lib/site";

export default function ProfileChooser() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {profileCards.map((card) => (
        <li key={card.href}>
          <Link
            href={card.href}
            className="flex h-full min-h-11 gap-4 border border-line bg-white p-4 transition-colors hover:border-brand"
          >
            <span className="flex h-20 w-20 shrink-0 items-center justify-center bg-muted text-brand">
              <ProfileIcon kind={card.kind} />
            </span>
            <span>
              <span className="block text-lg font-semibold text-ink">{card.title}</span>
              <span className="mt-1 block text-base leading-snug">{card.use}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
