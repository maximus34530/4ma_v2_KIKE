"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { clsx } from "clsx";

export function ParallaxImage({
  src,
  alt,
  priority,
  sizes,
  strength = 50,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  strength?: number;
  className?: string;
  imgClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-strength, strength]);

  return (
    <div ref={ref} className={clsx("absolute inset-0 overflow-hidden", className)}>
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[10%] -bottom-[10%]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={clsx("object-cover", imgClassName)}
        />
      </motion.div>
    </div>
  );
}
