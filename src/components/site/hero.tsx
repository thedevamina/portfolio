import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Code2,
  Smartphone,
  Brain,
  Rocket,
} from "lucide-react";
import { ROLES, SOCIALS } from "./data";
import { Magnetic } from "./primitives";
import { ParticleField } from "./effects";

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[index % ROLES.length];
    const done = !deleting && text === full;
    const cleared = deleting && text === "";

    if (done) {
      const t = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(t);
    }
    if (cleared) {
      setDeleting(false);
      setIndex((i) => (i + 1) % ROLES.length);
      return;
    }
    const t = setTimeout(
      () => setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)),
      deleting ? 40 : 75,
    );
    return () => clearTimeout(t);
  }, [text, deleting, index]);

  return (
    <span className="text-gradient">
      <span aria-live="polite">{text}</span>
      <span aria-hidden className="animate-caret font-light text-cyan">
        |
      </span>
    </span>
  );
}

const STATS = [
  { label: "Projects Shipped", value: "6+" },
  { label: "Tech Stack", value: "10+" },
  { label: "Years Coding", value: "3+" },
  { label: "Client Ready", value: "100%" },
];

// Feature cards data — each has a fixed corner + row so they can never collide.
// Top row cards sit at `top-*`, bottom row cards sit at `bottom-*`, and the
// wrapper below has a guaranteed min-height so there's always room between rows.
const FEATURE_CARDS = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Responsive sites built with React.",
    position: "left-[-1.25rem] top-6 xl:left-[-3rem]",
    float: { y: [0, -8, 0], duration: 5, delay: 0 },
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Cross-platform apps that just work.",
    position: "right-[-1.25rem] top-6 xl:right-[-3rem]",
    float: { y: [0, 8, 0], duration: 5.5, delay: 0.5 },
  },
  {
    icon: Brain,
    title: "AI/ML Integration",
    desc: "Smart features baked into products.",
    position: "left-[-1.5rem] bottom-6 xl:left-[-3.5rem]",
    float: { y: [0, 8, 0], duration: 6, delay: 1 },
  },
  {
    icon: Rocket,
    title: "Automation",
    desc: "Tools that save hours of manual work.",
    position: "right-[-1.5rem] bottom-6 xl:right-[-3.5rem]",
    float: { y: [0, -8, 0], duration: 5.2, delay: 1.5 },
  },
];

function CodeAvatar() {
  return (
    <div className="relative flex aspect-[912/1104] w-full flex-col justify-center overflow-hidden bg-[#0b0e17] px-6 py-10 font-mono text-[13px] sm:px-7">
      {/* soft glows for depth, echoing the site's gradient */}
      <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-[image:var(--gradient-brand)] opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[image:var(--gradient-brand)] opacity-10 blur-3xl" />

      {/* window chrome */}
      <div className="relative flex items-center justify-between pb-5">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-xs text-white/40">amina.ts</span>
      </div>

      {/* code block */}
      <pre className="relative overflow-x-auto leading-relaxed whitespace-pre text-white/90">
        <span className="text-purple-400">const</span> <span className="text-cyan-300">amina</span>
        {" = {\n"}
        {"  role: "}
        <span className="text-emerald-300">"Full-Stack Developer"</span>
        {",\n"}
        {"  stack: ["}
        <span className="text-emerald-300">"React"</span>
        {", "}
        <span className="text-emerald-300">"Node"</span>
        {",\n          "}
        <span className="text-emerald-300">"TypeScript"</span>
        {", "}
        <span className="text-emerald-300">"Next.js"</span>
        {"],\n"}
        {"  loves: ["}
        <span className="text-emerald-300">"clean UI"</span>
        {",\n          "}
        <span className="text-emerald-300">"automation"</span>
        {", "}
        <span className="text-emerald-300">"AI/ML"</span>
        {"],\n"}
        {"  available: "}
        <span className="text-amber-300">true</span>
        {",\n}"}
      </pre>

      <div className="relative mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-cyan-300">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_theme(colors.cyan.300)]" />
        Open to new opportunities
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24">
      <ParticleField />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_12px_var(--cyan)]" />
            Available for Freelance & Full-time Roles
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-5xl leading-[0.98] font-semibold sm:text-7xl"
          >
            Hi, I'm
            <br />
            Amina Ali
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.7 }}
            className="mt-5 text-2xl font-medium sm:text-3xl"
          >
            <Typewriter />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.7 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Building modern web applications and intuitive digital experiences. I care about the
            small things — the timing of a transition, the weight of a heading, the moment a product
            starts to feel effortless.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.45, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3.5 text-sm font-medium text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
              >
                View Projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="/Amina_Ali_CV_.docx"
                download="Amina_Ali_CV_.docx"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-colors hover:bg-surface-2"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Magnetic>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.7 }}
            className="mt-10 flex items-center gap-3"
          >
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
                className="glass grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
            <span className="ml-2 hidden text-xs tracking-widest text-muted-foreground uppercase sm:inline">
              Pakistan · Remote friendly
            </span>
          </motion.div>
        </div>

        {/* Illustration with floating feature cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none lg:min-h-[520px] xl:min-h-[560px]"
        >
          {/* Floating cards - hidden on small screens to avoid clutter.
              Each card is pinned to one of four corners (top-left, top-right,
              bottom-left, bottom-right) so top-row cards can never collide
              with bottom-row cards, and the min-height above guarantees the
              vertical gap between the two rows. */}
          {FEATURE_CARDS.map(({ icon: Icon, title, desc, position, float }) => (
            <motion.div
              key={title}
              animate={{ y: float.y }}
              transition={{ duration: float.duration, repeat: Infinity, ease: "easeInOut", delay: float.delay }}
              className={`glass-card absolute z-20 hidden w-44 rounded-2xl p-4 lg:block ${position}`}
            >
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)]">
                  <Icon className="h-4 w-4 text-white" />
                </span>
                <p className="text-sm font-semibold">{title}</p>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">{desc}</p>
            </motion.div>
          ))}

          <div className="absolute -inset-6 rounded-[2.5rem] bg-[image:var(--gradient-brand)] opacity-25 blur-3xl" />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card relative z-10 overflow-hidden rounded-[2rem]"
          >
            <CodeAvatar />
          </motion.div>

          {/* status badge — a sibling of the (overflow-hidden) code panel so it
              doesn't get clipped, centered so it can't collide with the
              corner-pinned skill cards, and pulled well above the bottom row
              so it doesn't collide vertically either */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card absolute bottom-28 left-1/2 z-20 hidden w-52 -translate-x-1/2 rounded-2xl px-4 py-3 lg:block xl:bottom-32"
          >
            <p className="text-[11px] text-muted-foreground">Now building</p>
            <p className="text-sm font-semibold">Portfolio v2 redesign</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.7 }}
        className="glass-card mx-auto mt-16 flex max-w-5xl flex-wrap items-center justify-around gap-6 rounded-3xl px-6 py-6 sm:px-10"
      >
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-bold text-gradient sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9 }}
        className="mx-auto mt-12 flex w-fit items-center gap-2 text-xs tracking-[0.2em] text-muted-foreground uppercase"
      >
        Scroll
        <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.span>
      </motion.a>
    </section>
  );
}