import { motion } from "framer-motion";
import { Reveal, Section, SectionHeading } from "./primitives";
import { TIMELINE } from "./data";;

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="About"
            title="Engineering with a designer's eye."
            description="I'm a computer science student and developer from Pakistan who builds products where the code and the interface are held to the same standard. Clean architecture on the inside, considered detail on the outside."
          />
        </div>

        <ol className="relative">
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-[7px] w-px bg-[linear-gradient(to_bottom,var(--primary),var(--cyan),transparent)] opacity-60"
          />
          {TIMELINE.map((item, i) => (
            <li key={item.year} className="relative pb-10 pl-10 last:pb-0">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 320, damping: 20 }}
                className="absolute top-1.5 left-0 grid h-3.5 w-3.5 place-items-center rounded-full bg-[image:var(--gradient-brand)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-background" />
              </motion.span>
              <Reveal delay={i * 0.06}>
                <p className="text-xs tracking-[0.2em] text-cyan uppercase">{item.year}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}


