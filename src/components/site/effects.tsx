import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

/** Animated gradient blobs + noise texture, fixed behind all content. */
export function AmbientBackground() {
  return (
    <div aria-hidden className="noise pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full bg-primary/25 blur-[130px] animate-blob" />
      <div
        className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-violet/25 blur-[140px] animate-blob"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-cyan/20 blur-[150px] animate-blob"
        style={{ animationDelay: "-14s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_0%,var(--background)_78%)]" />
    </div>
  );
}

/** Sparse drifting particles rendered on a canvas. */
export function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.00035,
      vy: (Math.random() - 0.5) * 0.00035,
      a: Math.random() * 0.4 + 0.15,
    }));

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > 1) d.vx *= -1;
        if (d.y < 0 || d.y > 1) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x * w, d.y * h, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150,160,255,${d.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />;
}

/** Soft glow that trails the pointer. Hidden on touch / reduced motion. */
export function CursorGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ left: sx, top: sy }}
      className="pointer-events-none fixed z-30 -ml-[240px] -mt-[240px] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_22%,transparent)_0%,transparent_65%)] mix-blend-screen"
    />
  );
}

/** Top scroll progress bar. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-[image:var(--gradient-brand)]"
    />
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={false}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 24, pointerEvents: show ? "auto" : "none" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="glass fixed right-5 bottom-5 z-40 grid h-12 w-12 place-items-center rounded-full text-foreground shadow-[var(--shadow-soft)]"
    >
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  );
}

/** Brand loading screen shown briefly on first paint. */
export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      aria-hidden={done}
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ pointerEvents: done ? "none" : "auto" }}
      className="fixed inset-0 z-[60] grid place-items-center bg-background"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold tracking-tight text-gradient"
        >
          AA
        </motion.div>
        <div className="h-[2px] w-40 overflow-hidden rounded-full bg-surface-2">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-full w-full bg-[image:var(--gradient-brand)]"
          />
        </div>
      </div>
    </motion.div>
  );
}

/** Parallax wrapper — translates children as they pass the viewport. */
export function Parallax({
  children,
  amount = 60,
  className,
}: {
  children: React.ReactNode;
  amount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yRaw = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  const y = useSpring(yRaw, { stiffness: 90, damping: 24 });
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
