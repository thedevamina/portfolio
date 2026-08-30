import { motion } from "framer-motion";
import { SKILL_GROUPS } from "./data";
import { Reveal, Section, SectionHeading } from "./primitives";

const ACCENT: Record<string, string> = {
  primary: "var(--primary)",
  violet: "var(--violet)",
  cyan: "var(--cyan)",
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="The toolkit, honestly rated."
        description="Everything here is something I've actually shipped with — not a logo wall."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {SKILL_GROUPS.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.08}>
            <div
              className="glass-card gradient-border group h-full rounded-3xl p-7"
              style={{ ["--tw-x" as string]: "0" }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: ACCENT[group.accent], boxShadow: `0 0 14px ${ACCENT[group.accent]}` }}
                />
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <span className="ml-auto text-xs text-muted-foreground">{group.items.length}</span>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}
                    whileHover={{ y: -3 }}
                  >
                    <span
                      className="inline-flex cursor-default rounded-full border border-border bg-surface px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:border-transparent hover:text-foreground"
                      style={{ boxShadow: "none" }}
                    >
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
