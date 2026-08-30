import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { NAV_LINKS } from "./data";
import { Magnetic } from "./primitives";

function useTheme() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("aa-theme");
    const isLight = stored === "light";
    setLight(isLight);
    document.documentElement.classList.toggle("light", isLight);
  }, []);

  const toggle = () => {
    setLight((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("light", next);
      window.localStorage.setItem("aa-theme", next ? "light" : "dark");
      return next;
    });
  };

  return { light, toggle };
}

function useScrollSpy(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.6] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

export function Navbar() {
  const { light, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-5">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
        className={`mx-auto flex max-w-6xl items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-500 sm:px-5 ${
          scrolled ? "glass shadow-[var(--shadow-soft)]" : "border border-transparent"
        }`}
      >
        <a href="#hero" className="flex min-w-0 items-center gap-2.5 font-semibold tracking-tight">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-sm text-white">
            A
          </span>
          <span className="truncate">Amina Ali</span>
        </a>

        <ul className="mx-auto hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="relative inline-flex rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-surface-2"
                  />
                )}
                <span className={`relative ${active === link.id ? "text-foreground" : ""}`}>
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-0">
          <button
            type="button"
            onClick={toggle}
            aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            {light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>

          <Magnetic className="hidden sm:inline-flex">
            <a
              href="#contact"
              className="rounded-full bg-[image:var(--gradient-brand)] px-4 py-2 text-sm font-medium text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              Let's talk
            </a>
          </Magnetic>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 md:hidden"
          >
            <ul className="grid gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
