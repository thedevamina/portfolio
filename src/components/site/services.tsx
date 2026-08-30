import { motion } from "framer-motion";
import { Boxes, Braces, LayoutGrid, Palette, Server, Sparkles } from "lucide-react";
import { SERVICES } from "./data";
import { Reveal, Section, SectionHeading } from "./primitives";

const ICONS = [LayoutGrid, Palette, Boxes, Braces, Server, Sparkles];

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        title="How I can help."
        description="From a single polished landing page to a full product with a database behind it."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-background p-8 transition-colors hover:bg-surface"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_70%)]" />
              <div className="relative">
                <span className="glass grid h-11 w-11 place-items-center rounded-2xl transition-transform duration-500 group-hover:-translate-y-1">
                  <Icon className="h-5 w-5 text-cyan" />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

export function Marquee() {
  const words = ["React", "Next.js", "TypeScript", "Laravel", "Figma", "Node.js", "MongoDB", "Motion", "Accessibility"];
  const row = [...words, ...words];
  return (
    <div aria-hidden className="relative overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
      <div className="animate-marquee flex w-max gap-10">
        {row.map((word, i) => (
          <span key={`${word}-${i}`} className="text-sm tracking-[0.25em] text-muted-foreground uppercase">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
