import { GraduationCap } from "lucide-react";
import { COURSEWORK, EXPERIENCE } from "./data";
import { Reveal, Section, SectionHeading } from "./primitives";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where the work happened."
        align="center"
      />

      <ol className="relative mt-16 sm:mx-auto sm:max-w-3xl">
        <div
          aria-hidden
          className="absolute top-3 bottom-3 left-[9px] w-px bg-[linear-gradient(to_bottom,transparent,var(--primary),var(--cyan),transparent)]"
        />
        {EXPERIENCE.map((role, i) => (
          <li key={role.role} className="relative pb-12 pl-12 last:pb-0">
            <span className="absolute top-2 left-0 grid h-[19px] w-[19px] place-items-center rounded-full border border-border bg-card">
              <span className="h-2 w-2 rounded-full bg-[image:var(--gradient-brand)]" />
            </span>
            <Reveal delay={i * 0.08}>
              <div className="glass-card gradient-border rounded-2xl p-6 sm:p-7">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-semibold">{role.role}</h3>
                    <p className="text-sm text-muted-foreground">{role.org}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">
                    {role.period}
                  </span>
                </div>
                <ul className="mt-5 grid gap-2.5">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" className="py-16 sm:py-20">
      <Reveal>
        <div className="glass-card gradient-border grid gap-10 rounded-[2rem] p-8 sm:p-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="glass inline-flex h-11 w-11 items-center justify-center rounded-2xl">
              <GraduationCap className="h-5 w-5 text-cyan" />
            </span>
            <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">
              Bachelor of Computer Science
            </h2>
            <p className="mt-2 text-muted-foreground">University of Gujrat · Pakistan · Expected 2027</p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Currently completing a Bachelor of Computer Science, building a strong foundation in computer science alongside hands-on software development. My work focuses on web engineering, AI/ML applications, and building practical digital products.
            </p>
            <ul className="mt-6 grid gap-2.5">
              {[
                "Continuing undergraduate studies with a focus on software engineering and AI/ML",
                "Building full-stack applications with React, Node.js, Laravel, and related technologies",
                "Capstone: Full-stack management platform with role-based access",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Relevant coursework
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {COURSEWORK.map((course) => (
                <li
                  key={course}
                  className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {course}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Applied technologies
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              React · TypeScript · Laravel · MySQL · MongoDB · Figma · Git
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
