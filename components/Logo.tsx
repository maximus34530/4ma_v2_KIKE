import { clsx } from "clsx";

export function Logo({
  light = true,
  size = 38,
}: {
  light?: boolean;
  size?: number;
}) {
  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <rect
          x="20"
          y="2"
          width="25.5"
          height="25.5"
          rx="4"
          transform="rotate(45 20 2)"
          fill="var(--accent)"
        />
        <rect
          x="20"
          y="12"
          width="14"
          height="14"
          rx="2.5"
          transform="rotate(45 20 12)"
          fill={light ? "white" : "var(--ink)"}
        />
      </svg>
      <span
        className={clsx(
          "font-heading font-extrabold tracking-wide text-[19px]",
          light ? "text-white" : "text-ink"
        )}
      >
        4MA CONSTRUCTION
      </span>
    </div>
  );
}
