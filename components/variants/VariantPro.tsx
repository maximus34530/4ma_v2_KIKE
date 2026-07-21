import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { Logo } from "@/components/Logo";
import { ParallaxImage } from "@/components/ParallaxImage";
import { Reveal, RevealGroup, fadeUpItem } from "@/components/Reveal";
import { useScrolled } from "@/lib/useScrolled";

const serviceFeatures = [
  {
    key: "residential",
    eyebrow: "Residential",
    title: "Custom Homes",
    body: "Ground-up custom homes built to your plans, from foundation to finish, with the craftsmanship families keep for generations.",
    span: "row-span-2",
    img: "/custom-home.jpg",
    alt: "Custom home built by 4Ma Construction in McAllen",
  },
  {
    key: "commercial",
    eyebrow: "Commercial",
    title: "Retail, Church & Industrial",
    img: "/commercial.jpg",
    alt: "Two-story commercial office built by 4Ma Construction",
  },
  {
    key: "outdoor",
    eyebrow: "Outdoor Living",
    title: "Patios, Pools & Additions",
    img: "/framing.jpg",
    alt: "Patio and roof framing jobsite",
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
  {
    label: "Spanish Colonial Estate · Edinburg",
    img: "/hero.jpg",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    label: "Custom Home · McAllen",
    img: "/custom-home.jpg",
    span: "",
  },
  {
    label: "Two-Story Office · McAllen",
    img: "/commercial.jpg",
    span: "",
  },
  {
    label: "Patio & Roof Framing · Edinburg",
    img: "/framing.jpg",
    span: "md:col-span-2",
  },
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

const navLink =
  "relative font-body text-sm text-white/85 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent-light after:transition-all after:duration-300 hover:after:w-full";

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

export function VariantPro() {
  const scrolled = useScrolled(40);

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
      <header
        className={clsx(
          "sticky top-0 z-30 flex items-center justify-between gap-6 bg-ink px-6 py-[22px] transition-shadow duration-300 md:px-14",
          scrolled && "shadow-lg shadow-black/30"
        )}
      >
        <Logo size={40} />
        <nav className="hidden items-center gap-9 md:flex">
          {["Services", "Projects", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={navLink}>
              {item}
            </a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-md bg-accent px-6 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Get a Quote
          </motion.a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex h-[560px] items-end overflow-hidden bg-[oklch(20%_0.01_250)] md:h-[760px]">
        <ParallaxImage
          src="/hero.jpg"
          alt="Spanish-colonial estate at dusk, built by 4Ma Construction"
          priority
          sizes="100vw"
          strength={70}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(20%_0.01_250)]/30 via-transparent to-[oklch(20%_0.01_250)]/85" />
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="relative flex max-w-[840px] flex-col gap-5 px-6 pb-12 md:px-14 md:pb-16"
        >
          <motion.span
            variants={fadeUpItem}
            className="font-body text-[13px] font-semibold uppercase tracking-[2.5px] text-accent-light"
          >
            Residential &amp; Commercial Builders · Rio Grande Valley
          </motion.span>
          <motion.h1
            variants={fadeUpItem}
            className="font-heading text-[42px] font-extrabold leading-[1.0] tracking-tight text-white md:text-[76px]"
          >
            Homes worthy of a lifetime.
          </motion.h1>
          <motion.p
            variants={fadeUpItem}
            className="max-w-[560px] font-body text-base leading-relaxed text-white/90 md:text-lg"
          >
            4Ma builds ground-up homes, commercial spaces, additions, and
            outdoor living across the Valley. Built right, from foundation to
            final walkthrough.
          </motion.p>
          <motion.div variants={fadeUpItem} className="mt-1.5 flex flex-wrap gap-3.5">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-md bg-accent px-7 py-4 font-body text-[15px] font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Request a Free Quote
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-md border-[1.5px] border-white/55 bg-white/10 px-7 py-4 font-body text-[15px] font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              View Our Work
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* What We Build */}
      <section id="services" className="flex flex-col gap-11 px-6 py-16 md:px-14 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="flex flex-col gap-3.5">
            <span className="font-body text-[13px] font-semibold uppercase tracking-[2.5px] text-accent">
              What We Build
            </span>
            <h2 className="font-heading text-[32px] font-bold tracking-tight text-ink md:text-[42px]">
              Two sectors. One standard.
            </h2>
          </Reveal>
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
              variants={fadeUpItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className={`group relative min-h-[260px] overflow-hidden rounded-lg ${s.span ?? ""}`}
            >
              <Image
                src={s.img}
                alt={s.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
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
        <div className="relative min-h-[320px] md:min-h-[560px]">
          <ParallaxImage
            src="/framing.jpg"
            alt="Patio and roof framing jobsite detail"
            sizes="(max-width: 768px) 100vw, 45vw"
            strength={36}
          />
        </div>
        <div className="flex flex-col justify-center gap-8 px-6 py-16 md:px-18 md:py-22">
          <Reveal className="flex flex-col gap-4">
            <span className="font-body text-[13px] font-semibold uppercase tracking-[2.5px] text-accent-light">
              Why 4Ma
            </span>
            <h2 className="font-heading text-[28px] font-bold leading-tight tracking-tight text-white md:text-[40px]">
              The details you never see are the ones that last.
            </h2>
          </Reveal>
          <RevealGroup className="flex flex-col gap-6" stagger={0.12}>
            {whyUs.map((item) => (
              <motion.div
                key={item.num}
                variants={fadeUpItem}
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
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Recent Projects */}
      <section id="projects" className="flex flex-col gap-11 px-6 py-16 md:px-14 md:py-24">
        <Reveal className="flex flex-col gap-3.5">
          <span className="font-body text-[13px] font-semibold uppercase tracking-[2.5px] text-accent">
            Recent Projects
          </span>
          <h2 className="font-heading text-[32px] font-bold tracking-tight text-ink md:text-[42px]">
            Work across the Valley.
          </h2>
        </Reveal>
        <RevealGroup
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px]"
          stagger={0.1}
        >
          {gallery.map((g) => (
            <motion.div
              key={g.label}
              variants={fadeUpItem}
              className={`group relative min-h-[160px] overflow-hidden rounded-lg ${g.span}`}
            >
              <Image
                src={g.img}
                alt={g.label}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(20%_0.01_250)]/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 font-heading text-sm font-bold text-white md:text-base">
                {g.label}
              </span>
            </motion.div>
          ))}
        </RevealGroup>
      </section>

      {/* Trusted By */}
      <section id="about" className="flex flex-col gap-7 px-6 pb-20 md:px-14">
        <span className="font-body text-[13px] font-semibold uppercase tracking-[2.5px] text-accent">
          Trusted By
        </span>
        <RevealGroup className="flex flex-wrap items-center gap-x-11 gap-y-4" stagger={0.05}>
          {clients.map((c) => (
            <motion.span
              key={c}
              variants={fadeUpItem}
              className="font-heading text-base font-bold text-ink-muted"
            >
              {c}
            </motion.span>
          ))}
        </RevealGroup>
      </section>

      {/* Closing CTA */}
      <section
        id="contact"
        className="relative flex flex-col items-start gap-8 overflow-hidden bg-accent px-6 py-16 md:flex-row md:items-center md:justify-between md:px-14 md:py-24"
      >
        <Reveal className="flex max-w-[640px] flex-col gap-3.5">
          <h2 className="font-heading text-[30px] font-extrabold leading-tight tracking-tight text-white md:text-[46px]">
            Ready to build something worth keeping?
          </h2>
          <p className="font-body text-base leading-relaxed text-white/90 md:text-[17px]">
            Tell us about your project. We&rsquo;ll walk the site, talk
            through your plans, and give you a straight quote.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="flex flex-shrink-0 flex-col gap-3">
          <motion.a
            href="tel:+19560000000"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-md bg-[oklch(20%_0.01_250)] px-8 py-[18px] text-center font-body text-base font-semibold text-white transition-colors hover:bg-black"
          >
            Request a Free Quote
          </motion.a>
          <a
            href="tel:+19560000000"
            className="text-center font-body text-[15px] font-semibold text-white/90 hover:text-white"
          >
            or call (956) 000-0000
          </a>
        </Reveal>
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
