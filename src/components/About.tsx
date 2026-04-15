"use client";

import { motion } from "framer-motion";

const pills = [
  "ITIL Framework",
  "Agile Delivery",
  "Government-Ready",
  "Enterprise Solutions",
  "AI-Powered",
  "Kuala Lumpur, Malaysia",
];

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-grey-bg py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-[72px] items-center">
          <div className="relative overflow-hidden rounded-[20px] bg-dark-2 min-h-[360px] p-10 flex flex-col justify-between">
            <div className="absolute inset-0 grid-pattern-subtle pointer-events-none" />
            <div className="relative flex justify-end">
              <span className="inline-flex items-center rounded-full border border-green/40 bg-green/10 px-3 py-1 text-xs font-semibold text-green tracking-wide">
                Est. 2018
              </span>
            </div>
            <div
              className="relative font-extrabold text-white leading-[1.05] tracking-tightest"
              style={{ fontSize: "clamp(40px, 5vw, 56px)" }}
            >
              Software
              <br />
              that <span style={{ color: "#4ade80" }}>works</span>
              <br />
              for you.
            </div>
          </div>

          <div>
            <div className="eyebrow text-green-deep">About Us</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-dark">
              An IT Company Built for Impact
            </h2>
            <div className="mt-6 space-y-5 text-base font-light leading-[1.8] text-grey">
              <p>
                Founded in 2018, AppSoft Asia Sdn Bhd is a specialist IT
                company delivering intelligent software solutions to government
                agencies, enterprises, and SMEs across the region.
              </p>
              <p>
                We combine deep domain expertise, industry-aligned best
                practices, and modern technology to build systems that are fast
                to deploy, easy to use, and built to scale — from first
                registration to final resolution, every event is tracked,
                scored, and actionable.
              </p>
              <p>
                Our approach is guided by the ITIL framework, agile delivery,
                and a commitment to keeping systems online, compliant, and
                continuously improving.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {pills.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold"
                  style={{
                    background: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    color: "#166534",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
