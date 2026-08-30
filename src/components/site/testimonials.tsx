import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "./data";
import { Section, SectionHeading } from "./primitives";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const total = TESTIMONIALS.length;

  const go = (step: number) => {
    setDir(step);
    setIndex((i) => (i + step + total) % total);
  };

  const item = TESTIMONIALS[index];

  return (
    <Section id="testimonials">
      <SectionHeading eyebrow="Testimonials" title="Kind words." align="center" />

      <div className="relative mx-auto mt-14 max-w-3xl">
        <div className="glass-card relative min-h-[19rem] overflow-hidden rounded-[2rem] p-8 sm:min-h-[16rem] sm:p-12">
          <Quote className="h-8 w-8 text-primary/60" />
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5"
            >
              <p className="text-lg leading-relaxed text-foreground sm:text-xl">"{item.quote}"</p>
              <footer className="mt-6 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{item.name}</span> · {item.role}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="glass grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.quote}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index}
                onClick={() => {
                  setDir(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-8 bg-[image:var(--gradient-brand)]" : "w-1.5 bg-surface-2"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="glass grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Section>
  );
}
