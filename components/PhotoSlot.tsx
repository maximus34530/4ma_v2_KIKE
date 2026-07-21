import { clsx } from "clsx";

export function PhotoSlot({
  label,
  dark = false,
  className,
}: {
  label: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative flex items-center justify-center overflow-hidden",
        dark ? "photo-slot-dark" : "photo-slot",
        className
      )}
    >
      <span
        className={clsx(
          "px-3 py-1 text-center font-mono text-[11px] uppercase tracking-wide",
          dark ? "text-white/40" : "text-ink-faint/70"
        )}
      >
        {label}
      </span>
    </div>
  );
}
