"use client";

import { clsx } from "clsx";

export type Variant = "a" | "pro";

export function VariantToggle({
  active,
  onChange,
}: {
  active: Variant;
  onChange: (v: Variant) => void;
}) {
  return (
    <div
      className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-2xl bg-[oklch(18%_0.01_250)] px-3 py-2.5 shadow-2xl shadow-black/40"
      role="group"
      aria-label="Preview design variant"
    >
      <span className="px-1.5 font-body text-[11px] font-semibold uppercase tracking-wide text-white/40">
        Design
      </span>
      <button
        type="button"
        onClick={() => onChange("a")}
        className={clsx(
          "rounded-lg px-4 py-2 font-heading text-[13px] font-bold text-white transition-colors",
          active === "a" ? "bg-accent" : "bg-white/10 hover:bg-white/20"
        )}
      >
        1A
      </button>
      <button
        type="button"
        onClick={() => onChange("pro")}
        className={clsx(
          "rounded-lg px-4 py-2 font-heading text-[13px] font-bold text-white transition-colors",
          active === "pro" ? "bg-accent" : "bg-white/10 hover:bg-white/20"
        )}
      >
        1A-PRO
      </button>
    </div>
  );
}
