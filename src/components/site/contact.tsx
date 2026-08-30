import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Check, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { SOCIALS } from "./data";
import { Magnetic, Reveal, Section, SectionHeading } from "./primitives";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    window.location.href = `${SOCIALS.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full rounded-2xl border border-border bg-surface px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none";

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something worth shipping."
            description="Have a project, a role, or an idea you want pressure-tested? I read every message."
          />

          <Reveal delay={0.15}>
            <ul className="mt-10 grid gap-3">
              {[
                { Icon: Mail, label: "hello@aminaali.dev", href: SOCIALS.email },
                { Icon: Linkedin, label: "linkedin.com/in/aminaali", href: SOCIALS.linkedin },
                { Icon: Github, label: "github.com/aminaali", href: SOCIALS.github },
                { Icon: MapPin, label: "Pakistan · Available remotely", href: null },
              ].map(({ Icon, label, href }) => {
                const content = (
                  <span className="glass-card gradient-border flex items-center gap-4 rounded-2xl px-5 py-4 text-sm transition-transform hover:-translate-y-0.5">
                    <Icon className="h-4.5 w-4.5 shrink-0 text-cyan" />
                    <span className="min-w-0 truncate text-muted-foreground">{label}</span>
                  </span>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="glass-card rounded-[2rem] p-7 sm:p-9">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-xs tracking-[0.15em] text-muted-foreground uppercase">
                  Name
                </label>
                <input id="name" name="name" required placeholder="Your name" className={field} />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-xs tracking-[0.15em] text-muted-foreground uppercase">
                  Email
                </label>
                <input id="email" name="email" type="email" required placeholder="you@company.com" className={field} />
              </div>
            </div>

            <div className="mt-4 grid gap-2">
              <label htmlFor="subject" className="text-xs tracking-[0.15em] text-muted-foreground uppercase">
                Subject
              </label>
              <input id="subject" name="subject" placeholder="What's this about?" className={field} />
            </div>

            <div className="mt-4 grid gap-2">
              <label htmlFor="message" className="text-xs tracking-[0.15em] text-muted-foreground uppercase">
                Message
              </label>
              <textarea id="message" name="message" required rows={5} placeholder="Tell me about the project…" className={`${field} resize-none`} />
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Magnetic>
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3.5 text-sm font-medium text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
                >
                  {sent ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                  {sent ? "Opening your mail app" : "Send message"}
                </motion.button>
              </Magnetic>
              <p aria-live="polite" className="text-xs text-muted-foreground">
                Usually replies within a day.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 sm:flex-row sm:justify-between sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-sm text-white">
            A
          </span>
          <span className="text-sm font-medium">Amina Ali</span>
        </div>

        <div className="flex items-center gap-3">
          {[
            { href: SOCIALS.github, label: "GitHub", Icon: Github },
            { href: SOCIALS.linkedin, label: "LinkedIn", Icon: Linkedin },
            { href: SOCIALS.email, label: "Email", Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Amina Ali. Designed & built in Pakistan.
        </p>
      </div>
    </footer>
  );
}
