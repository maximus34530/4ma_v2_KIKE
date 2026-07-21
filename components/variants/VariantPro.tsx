import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { PhotoSlot } from "@/components/PhotoSlot";

const serviceFeatures = [
  {
    key: "residential",
    eyebrow: "Residential",
    title: "Custom Homes",
    body: "Ground-up custom homes built to your plans, from foundation to finish, with the craftsmanship families keep for generations.",
    span: "row-span-2",
  },
  {
    key: "commercial",
    eyebrow: "Commercial",
    title: "Retail, Church & Industrial",
  },
  {
    key: "outdoor",
    eyebrow: "Outdoor Living",
    title: "Patios, Pools & Additions",
  },
];

const whyUs = [
  {
    num: "01",
    title: "Licensed & insured",
    body: "Fully licensed and insured, so your project is protected at every stage.",
  },
  {
    num: "02",
    title: "RGV-based, RGV-built",
    body: "Local to Edinburg and rooted in the Valley. We build where we live.",
  },
  {
    num: "03",
    title: "Ground-up to finish",
    body: "One team from foundation to final walkthrough. No handoffs, no surprises.",
  },
];

const gallery = [
  { label: "Custom Residence · Edinburg", span: "col-span-2 row-span-2" },
  { label: "Interior Finish · McAllen", span: "col-span-2" },
  { label: "Retail Build-Out · Mission", span: "col-span-2" },
  { label: "Church · Pharr", span: "col-span-2" },
  { label: "Outdoor Living · Edinburg", span: "col-span-2" },
];

const clients = [
  "City of Edinburg",
  "City of McAllen",
  "McAllen-Hidalgo Bridge",
  "DTC Church",
  "Harvest Church",
  "Aguilar's",
  "Junior's",
  "Paris Bakery",
];

const footerServices = [
  "Custom Homes",
  "Commercial Build-Outs",
  "Remodels & Additions",
  "Outdoor Living",
];

const footerCompany = ["Projects", "About", "Contact"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export function VariantPro() {
  return (
    <div className="bg-white">
      {/* Utility bar */}
      <div className="flex items-center justify-between bg-[oklch(15%_0.01_250)] px-6 py-2 md:px-14">
        <span className="font-body text-[12.5px] text-white/70">
          Edinburg, TX · Serving the Rio Grande Valley
        </span>
        <div className="hidden items-center gap-6 md:flex">
          <span className="font-body text-[12.5px] text-white/70">
            Mon–Fri 7:30–5:30
          </span>
          <span className="font-body text-[12.5px] font-semibold text-accent-light">
            (956) 000-0000
          </span>
        </div>
      </div>

      {/* Nav */}
      <header className="flex items-center justify-between gap-6 bg-ink px-6 py-[22px] md:px-14">
        <Logo size={40} />
        <nav className="hidden items-center gap-9 md:flex">
          {["Services", "Projects", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-body text-sm text-white/85 transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-accent px-6 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Get a Quote
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex h-[560px] items-end overflow-hidden bg-[oklch(20%_0.01_250)] md:h-[760px]">
        <PhotoSlot label="hero — luxury custom home, golden hour" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(20%_0.01_250)]/30 via-transparent to-[oklch(20%_0.01_250)]/85" />
        <div className="relative flex max-w-[840px] flex-col gap-5 px-6 pb-12 md:px-14 md:pb-16">
          <span className="font-body text-[13px] font-semibold uppercase tracking-[2.5px] text-accent-light">
            Residential &amp; Commercial Builders · Rio Grande Valley
          </span>
          <h1 className="font-heading text-[42px] font-extrabold leading-[1.0] tracking-tight text-white md:text-[76px]">
            Homes worthy of a lifetime.
          </h1>
          <p className="max-w-[560px] font-body text-base leading-relaxed text-white/90 md:text-lg">
            4Ma builds ground-up homes, commercial spaces, additions, and
            outdoor living across the Valley. Built right, from foundation to
            final walkthrough.
          </p>
          <div className="mt-1.5 flex flex-wrap gap-3.5">
            <a
              href="#contact"
              className="rounded-md bg-accent px-7 py-4 font-body text-[15px] font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Request a Free Quote
            </a>
            <a
              href="#projects"
              className="rounded-md border-[1.5px] border-white/55 bg-white/10 px-7 py-4 font-body text-[15px] font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section id="services" className="flex flex-col gap-11 px-6 py-16 md:px-14 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-3.5">
            <span className="font-body text-[13px] font-semibold uppercase tracking-[2.5px] text-accent">
              What We Build
            </span>
            <h2 className="font-heading text-[32px] font-bold tracking-tight text-ink md:text-[42px]">
              Two sectors. One standard.
            </h2>
          </div>
          <a
            href="#services"
            className="flex items-center gap-1.5 font-body text-sm font-semibold text-accent hover:text-accent-dark"
          >
            All Services <ArrowRight size={14} />
          </a>
        </div>
        <div className="grid gap-5 md:h-[660px] md:grid-cols-[1.5fr_1fr] md:grid-rows-2">
          {serviceFeatures.map((s) => (
            <motion.div
              key={s.key}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`relative min-h-[260px] overflow-hidden rounded-lg ${s.span ?? ""}`}
            >
              <PhotoSlot dark label={s.title} className="absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(20%_0.01_250)]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 flex flex-col gap-2 p-7">
                <span className="font-body text-xs font-semibold uppercase tracking-[2px] text-accent-light">
                  {s.eyebrow}
                </span>
                <h3 className="font-heading text-xl font-bold text-white md:text-[28px]">
                  {s.title}
                </h3>
                {s.body && (
                  <p className="max-w-[400px] font-body text-[15px] leading-relaxed text-white/90">
                    {s.body}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why 4Ma */}
      <section className="grid bg-[oklch(20%_0.01_250)] md:grid-cols-[1fr_1.1fr]">
        <PhotoSlot dark label="craftsmanship detail" className="min-h-[320px] md:min-h-[560px]" />
        <div className="flex flex-col justify-center gap-8 px-6 py-16 md:px-18 md:py-22">
          <div className="flex flex-col gap-4">
            <span className="font-body text-[13px] font-semibold uppercase tracking-[2.5px] text-accent-light">
              Why 4Ma
            </span>
            <h2 className="font-heading text-[28px] font-bold leading-tight tracking-tight text-white md:text-[40px]">
              The details you never see are the ones that last.
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            {whyUs.map((item) => (
              <div
                key={item.num}
                className="flex gap-5 border-t border-white/15 pt-6"
              >
                <span className="w-9 flex-shrink-0 font-heading text-[15px] font-extrabold tracking-wide text-accent-light">
                  {item.num}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading text-[19px] font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="font-body text-[14.5px] leading-relaxed text-white/70">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section id="projects" className="flex flex-col gap-11 px-6 py-16 md:px-14 md:py-24">
        <div className="flex flex-col gap-3.5">
          <span className="font-body text-[13px] font-semibold uppercase tracking-[2.5px] text-accent">
            Recent Projects
          </span>
          <h2 className="font-heading text-[32px] font-bold tracking-tight text-ink md:text-[42px]">
            Work across the Valley.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6 md:auto-rows-[200px]">
          {gallery.map((g) => (
            <div
              key={g.label}
              className={`relative min-h-[160px] overflow-hidden rounded-lg ${g.span}`}
            >
              <PhotoSlot dark label={g.label} className="absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(20%_0.01_250)]/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 font-heading text-sm font-bold text-white md:text-base">
                {g.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted By */}
      <section id="about" className="flex flex-col gap-7 px-6 pb-20 md:px-14">
        <span className="font-body text-[13px] font-semibold uppercase tracking-[2.5px] text-accent">
          Trusted By
        </span>
        <div className="flex flex-wrap items-center gap-x-11 gap-y-4">
          {clients.map((c) => (
            <span
              key={c}
              className="font-heading text-base font-bold text-ink-muted"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section
        id="contact"
        className="relative flex flex-col items-start gap-8 overflow-hidden bg-accent px-6 py-16 md:flex-row md:items-center md:justify-between md:px-14 md:py-24"
      >
        <div className="flex max-w-[640px] flex-col gap-3.5">
          <h2 className="font-heading text-[30px] font-extrabold leading-tight tracking-tight text-white md:text-[46px]">
            Ready to build something worth keeping?
          </h2>
          <p className="font-body text-base leading-relaxed text-white/90 md:text-[17px]">
            Tell us about your project. We&rsquo;ll walk the site, talk
            through your plans, and give you a straight quote.
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-col gap-3">
          <a
            href="tel:+19560000000"
            className="rounded-md bg-[oklch(20%_0.01_250)] px-8 py-[18px] text-center font-body text-base font-semibold text-white transition-colors hover:bg-black"
          >
            Request a Free Quote
          </a>
          <a
            href="tel:+19560000000"
            className="text-center font-body text-[15px] font-semibold text-white/90 hover:text-white"
          >
            or call (956) 000-0000
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[oklch(15%_0.01_250)] px-6 pb-10 pt-16 md:px-14 md:pt-18">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.6fr_1fr_1fr_1.2fr] md:gap-10">
          <div className="flex flex-col gap-4">
            <Logo size={36} />
            <p className="max-w-[300px] font-body text-sm leading-relaxed text-white/60">
              Residential and commercial builders serving the Rio Grande
              Valley. Built right, from the ground up.
            </p>
          </div>
          <div className="flex flex-col gap-3.5">
            <span className="font-heading text-[13px] font-bold uppercase tracking-wide text-white">
              Services
            </span>
            {footerServices.map((s) => (
              <span key={s} className="font-body text-sm text-white/60">
                {s}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3.5">
            <span className="font-heading text-[13px] font-bold uppercase tracking-wide text-white">
              Company
            </span>
            {footerCompany.map((c) => (
              <a
                key={c}
                href={`#${c.toLowerCase()}`}
                className="font-body text-sm text-white/60 hover:text-white"
              >
                {c}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3.5">
            <span className="font-heading text-[13px] font-bold uppercase tracking-wide text-white">
              Contact
            </span>
            <a
              href="tel:+19560000000"
              className="font-body text-sm text-white/60 hover:text-white"
            >
              (956) 000-0000
            </a>
            <a
              href="mailto:info@4maconstruction.com"
              className="font-body text-sm text-white/60 hover:text-white"
            >
              info@4maconstruction.com
            </a>
            <span className="font-body text-sm text-white/60">
              Edinburg, TX · Rio Grande Valley
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-6 md:flex-row md:items-center md:justify-between">
          <span className="font-body text-[13px] text-white/45">
            © 2026 4Ma Construction. All rights reserved.
          </span>
          <span className="font-body text-[13px] text-white/45">
            Licensed &amp; Insured
          </span>
        </div>
      </footer>
    </div>
  );
}
