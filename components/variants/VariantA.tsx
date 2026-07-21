import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { clsx } from "clsx";
import { Logo } from "@/components/Logo";
import { ParallaxImage } from "@/components/ParallaxImage";
import { Reveal, RevealGroup, fadeUpItem } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { useScrolled } from "@/lib/useScrolled";

const services = [
  {
    num: "01",
    title: "Residential Construction",
    body: "Custom homes built ground-up, from foundation to finish.",
    img: "/custom-home.jpg",
    alt: "Custom home built by 4Ma Construction in McAllen",
  },
  {
    num: "02",
    title: "Commercial Build-Outs",
    body: "Retail, church, and industrial spaces built for business.",
    img: "/commercial.jpg",
    alt: "Two-story commercial office built by 4Ma Construction",
  },
  {
    num: "03",
    title: "Remodels & Additions",
    body: "Patio covers, stonework, room additions, and renovations.",
    img: "/framing.jpg",
    alt: "Patio and roof framing jobsite",
  },
];

const projects = [
  { label: "Custom Residence · McAllen", img: "/custom-home.jpg" },
  { label: "Two-Story Office · McAllen", img: "/commercial.jpg" },
  { label: "Spanish Colonial Estate · Edinburg", img: "/hero.jpg" },
  { label: "Patio & Roof Framing · Edinburg", img: "/framing.jpg" },
];

const stats = [
  { num: "20+", label: "Years of Experience" },
  { num: "100+", label: "Projects Completed" },
  { num: "2", label: "Sectors Served" },
  { num: "RGV", label: "Proudly Local" },
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

const navLink =
  "relative font-body text-sm text-white/85 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent-light after:transition-all after:duration-300 hover:after:w-full";

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

export function VariantA() {
  const scrolled = useScrolled(40);

  return (
    <div className="bg-white">
      {/* Nav */}
      <header
        className={clsx(
          "sticky top-0 z-30 flex items-center justify-between gap-6 bg-ink px-6 py-[22px] transition-shadow duration-300 md:px-14",
          scrolled && "shadow-lg shadow-black/30"
        )}
      >
        <Logo />
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
            className="rounded-md bg-accent px-[22px] py-[11px] font-body text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Get a Quote
          </motion.a>
        </nav>
        <a
          href="tel:+19560000000"
          className="flex items-center gap-2 font-body text-sm font-semibold text-accent-light md:hidden"
        >
          <Phone size={16} />
        </a>
      </header>

      {/* Hero */}
      <section className="relative flex h-[560px] items-center overflow-hidden bg-ink md:h-[640px]">
        <ParallaxImage
          src="/hero.jpg"
          alt="Spanish-colonial estate at dusk, built by 4Ma Construction"
          priority
          sizes="100vw"
          strength={70}
          imgClassName="opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" />
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="relative flex max-w-[680px] flex-col gap-5 px-6 md:px-14"
        >
          <motion.span
            variants={fadeUpItem}
            className="font-body text-sm font-semibold uppercase tracking-[2px] text-accent-light"
          >
            Residential &amp; Commercial Builders · Rio Grande Valley
          </motion.span>
          <motion.h1
            variants={fadeUpItem}
            className="font-heading text-[38px] font-extrabold leading-[1.05] text-white md:text-[56px]"
          >
            Homes worthy of a lifetime.
          </motion.h1>
          <motion.p
            variants={fadeUpItem}
            className="font-body text-base leading-relaxed text-white/85 md:text-[17px]"
          >
            4Ma builds ground-up homes, commercial spaces, additions, and
            outdoor living spaces across the Valley. Based in Edinburg, TX.
          </motion.p>
          <motion.div variants={fadeUpItem} className="mt-2 flex flex-wrap gap-3.5">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-md bg-accent px-7 py-[15px] font-body text-[15px] font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Request a Free Quote
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-md border-[1.5px] border-white/70 px-7 py-[15px] font-body text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Our Work
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* What We Build */}
      <section id="services" className="px-6 py-16 md:px-14 md:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-heading text-[28px] font-bold text-ink md:text-[32px]">
            What We Build
          </h2>
          <a
            href="#services"
            className="flex items-center gap-1.5 font-body text-sm font-semibold text-accent hover:text-accent-dark"
          >
            All Services <ArrowRight size={14} />
          </a>
        </div>
        <div className="grid gap-7 md:grid-cols-3">
          {services.map((s) => (
            <motion.article
              key={s.num}
              variants={fadeUpItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="group overflow-hidden rounded-md border border-line"
            >
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-heading text-[19px] font-bold text-ink">
                  {s.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-ink-muted">
                  {s.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Stats */}
      <RevealGroup
        className="grid grid-cols-2 gap-y-8 bg-ink px-6 py-14 text-center md:grid-cols-4 md:px-14"
        stagger={0.1}
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={fadeUpItem}>
            <div className="font-heading text-[32px] font-extrabold text-accent-light md:text-[38px]">
              <Counter value={s.num} />
            </div>
            <div className="mt-1.5 font-body text-[13px] text-white/75">
              {s.label}
            </div>
          </motion.div>
        ))}
      </RevealGroup>

      {/* Recent Projects */}
      <section id="projects" className="flex flex-col gap-8 px-6 py-16 md:px-14 md:py-20">
        <Reveal>
          <h2 className="font-heading text-[28px] font-bold text-ink md:text-[32px]">
            Recent Projects
          </h2>
        </Reveal>
        <RevealGroup className="grid grid-cols-2 gap-5 md:grid-cols-4" stagger={0.1}>
          {projects.map((p) => (
            <motion.div
              key={p.label}
              variants={fadeUpItem}
              className="group relative h-[190px] w-full overflow-hidden rounded-md"
            >
              <Image
                src={p.img}
                alt={p.label}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </motion.div>
          ))}
        </RevealGroup>
      </section>

      {/* Clients */}
      <section id="about" className="flex flex-col gap-7 px-6 py-14 md:px-14">
        <span className="font-body text-[13px] font-semibold uppercase tracking-[2px] text-accent">
          Our Clients
        </span>
        <RevealGroup className="flex flex-wrap items-center gap-x-10 gap-y-4" stagger={0.05}>
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
        className="flex flex-col items-start gap-6 bg-accent px-6 py-16 md:flex-row md:items-center md:justify-between md:px-14"
      >
        <Reveal>
          <h2 className="max-w-[520px] font-heading text-2xl font-bold text-white md:text-[30px]">
            Ready to start your project? Get in touch.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <motion.a
            href="tel:+19560000000"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block rounded-md bg-ink px-8 py-4 font-body text-[15px] font-semibold text-white transition-colors hover:bg-black"
          >
            Call (956) 000-0000
          </motion.a>
        </Reveal>
      </section>
    </div>
  );
}
