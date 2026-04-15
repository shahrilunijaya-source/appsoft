"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ShaderBackground from "@/components/ui/shader-background";

const stats = [
  { num: "2018", l1: "Incorporated", l2: "in Malaysia" },
  { num: "3+", l1: "Core Solutions", l2: "Deployed" },
  { num: "ITIL", l1: "Framework", l2: "Certified" },
  { num: "15mo", l1: "Avg. Contract", l2: "Support" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark text-white pt-[68px]"
    >
      <ShaderBackground className="absolute inset-0 w-full h-full pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(17,24,39,0.2) 0%, rgba(17,24,39,0.35) 55%, rgba(17,24,39,0.75) 100%)",
        }}
      />

      <div className="relative w-full mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-[860px]"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-green/40 bg-green/5 px-4 py-1.5 text-xs font-semibold text-green tracking-wide"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green pulse-dot" />
            Intelligent Software for the Modern Enterprise
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-8 font-extrabold tracking-tightest leading-[1.05] text-white"
            style={{ fontSize: "clamp(36px, 8vw, 76px)" }}
          >
            Powering <span style={{ color: "#4ade80" }}>Digital</span>
            <br />
            <span style={{ color: "#4ade80" }}>Transformation</span>
            <br />
            Across Industries
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-6 text-lg font-light leading-[1.8] text-white/60 max-w-2xl"
          >
            AppSoft Asia delivers enterprise-grade software solutions — from digital
            tax administration and intelligent helpdesk systems to AI-driven
            automation — built for governments, enterprises, and growing businesses.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-dark hover:bg-green-dark transition-colors"
            >
              Explore Our Products
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Contact Us
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((s) => (
              <div key={s.num}>
                <div
                  className="text-3xl md:text-4xl font-extrabold tracking-tight"
                  style={{ color: "#4ade80" }}
                >
                  {s.num}
                </div>
                <div className="mt-1 text-xs font-medium text-white/45 leading-snug">
                  {s.l1}
                  <br />
                  {s.l2}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
