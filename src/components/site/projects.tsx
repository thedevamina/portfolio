import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "./data";
import { Reveal, Section, SectionHeading, TiltCard } from "./primitives";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects built end to end."
        description="Four pieces that show the range — AI product, admin platform, brand-led design, and a finance tool."
      />

      <div className="mt-16 grid gap-6">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={0.05}>
            <TiltCard className="glass-card gradient-border overflow-hidden rounded-[2rem]">
              <article
                className={`grid gap-0 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              >
                <div className="relative overflow-hidden lg:[direction:ltr]">
                  <motion.img
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="h-64 w-full object-contain object-center sm:h-80 lg:h-full"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--card)_70%,transparent),transparent_55%)]" />
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-10 lg:[direction:ltr]">
                  <p className="text-xs tracking-[0.2em] text-cyan uppercase">
                    {project.year} · Featured
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{project.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {project.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors hover:bg-surface-2"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
