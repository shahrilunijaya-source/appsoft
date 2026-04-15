"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#agentic", label: "AI & Agentic" },
  { href: "#why", label: "Why Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const root = dialogRef.current;
      if (!root) return;
      const focusables = root.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    const first = dialogRef.current?.querySelector<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    first?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      openerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          boxShadow: scrolled
            ? "0 4px 24px -10px rgba(17, 24, 39, 0.08)"
            : "0 0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.25 }}
        className="fixed top-0 inset-x-0 z-50 h-[68px] bg-white/90 backdrop-blur-md border-b border-transparent"
      >
        <div className="mx-auto max-w-7xl h-full px-6 lg:px-8 flex items-center justify-between">
          <a href="#top" aria-label="AppSoft Asia home">
            <Logo size="md" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-grey hover:text-dark transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-green-deep px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-dark transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <button
            ref={openerRef}
            onClick={() => setOpen(true)}
            className="md:hidden p-2 -mr-2 text-dark"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={dialogRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-white md:hidden flex flex-col"
          >
            <div className="h-[68px] px-6 flex items-center justify-between border-b border-grey-pale">
              <Logo size="md" />
              <button
                onClick={() => setOpen(false)}
                className="p-2 -mr-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
              className="flex-1 flex flex-col items-center justify-center gap-8 px-6"
            >
              {LINKS.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="text-2xl font-semibold text-dark"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mt-4 inline-flex items-center rounded-full bg-green-deep px-6 py-3 text-base font-semibold text-white"
              >
                Get in Touch
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
