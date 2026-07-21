"use client";

import { useState } from "react";
import { VariantToggle, type Variant } from "@/components/VariantToggle";
import { VariantA } from "@/components/variants/VariantA";
import { VariantPro } from "@/components/variants/VariantPro";

export default function Home() {
  const [variant, setVariant] = useState<Variant>("pro");

  return (
    <main className="pb-24">
      {variant === "a" ? <VariantA /> : <VariantPro />}
      <VariantToggle active={variant} onChange={setVariant} />
    </main>
  );
}
