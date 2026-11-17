export function Pinwheel({ className }: { className?: string }) {
  return (
    <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" focusable="false">
      {/* Top-left blade: semicircle facing up-left */}
      <path fill="currentColor" d="M20 20 C20 20 4 20 4 12 C4 4 12 4 20 4 Z" />
      {/* Top-right blade: semicircle facing up-right */}
      <path fill="currentColor" d="M20 20 C20 20 20 4 28 4 C36 4 36 12 36 20 Z" />
      {/* Bottom-right blade: semicircle facing down-right */}
      <path fill="currentColor" d="M20 20 C20 20 36 20 36 28 C36 36 28 36 20 36 Z" />
      {/* Bottom-left blade: semicircle facing down-left */}
      <path fill="currentColor" d="M20 20 C20 20 20 36 12 36 C4 36 4 28 4 20 Z" />
    </svg>
  );
}
