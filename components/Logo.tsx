import Image from "next/image";
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
      <Image
        src="/4ma-logo.png"
        alt="4Ma Construction"
        width={189}
        height={160}
        style={{ height: size, width: "auto" }}
        className="flex-shrink-0"
        priority
      />
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
