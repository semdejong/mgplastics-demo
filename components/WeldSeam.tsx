/** Lasnaad als stippellijn. Tekent bij scroll; stil bij reduced motion. */
export default function WeldSeam({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`weld-seam h-3 w-full text-brand ${className}`}
      viewBox="0 0 400 12"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path className="weld-line" pathLength={1} d="M0 6 H400" />
    </svg>
  );
}
