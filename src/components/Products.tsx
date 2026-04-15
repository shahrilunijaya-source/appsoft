"use client";

import { motion } from "framer-motion";
import { Receipt, MessageSquare, Check, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Chip = { n: string; title: string; body: string };
type Product = {
  Icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  chips: Chip[];
  features: string[];
};

const products: Product[] = [
  {
    Icon: Receipt,
    title: "iTax",
    tagline: "Digital Tax Administration System 3.0",
    description:
      "A proven, commercial off-the-shelf (COTS) digital taxation platform that moves organisations from siloed, paper-heavy processes to a real-time, data-driven ecosystem — connecting taxpayers, authorities, and financial institutions on one unified platform.",
    chips: [
      { n: "01", title: "Core Benefit", body: "All-in-one, easy to integrate, comprehensive" },
      { n: "02", title: "Speed", body: "Fast time-to-value — available off-the-shelf" },
      { n: "03", title: "Standards", body: "IMF-aligned best practices & compliance" },
      { n: "04", title: "Platform", body: "Evolving platform with continuous operational support" },
    ],
    features: [
      "Taxpayer Registration & e-ID — one-click onboarding, instant certificates, auto-KYC",
      "Smart Returns & Real-Time Validation — automated filing and instant verification",
      "Accounting & Payments Hub — centralised payment processing and reconciliation",
      "Risk Scoring & Audit Planning — AI-driven anomaly detection and risk profiling",
      "Enforcement & Case Management — end-to-end case tracking from alert to resolution",
    ],
  },
  {
    Icon: MessageSquare,
    title: "Helpdesk",
    tagline: "Intelligent ITIL-Based Service Management",
    description:
      "A structured, ITIL-aligned helpdesk platform providing a Single Point of Contact (SPOC) for all technical support, change requests, and escalations — ensuring every issue is logged, tracked, and resolved within agreed SLA timelines.",
    chips: [
      { n: "01", title: "Support Tiers", body: "First Level, Resident Engineer & SDM coverage" },
      { n: "02", title: "Access", body: "Mon–Fri 9am–5pm + on-call for critical incidents" },
      { n: "03", title: "Remote", body: "Real-time remote support via AnyDesk / TeamViewer" },
      { n: "04", title: "Reporting", body: "Monthly SLA reports with incident analysis" },
    ],
    features: [
      "Automated ticket creation with unique Tracking ID and audit trail",
      "Three-role workflow: Pengguna, BTM & Syarikat with status escalation",
      "Staging environment testing before production deployment",
      "Service Delivery Manager (SDM) for proactive service oversight",
      "Multi-format document attachments and full audit trail visibility",
    ],
  },
];

function ProductCard({ product }: { product: Product }) {
  const { Icon, title, tagline, description, chips, features } = product;
  return (
    <motion.article
      whileHover={{ y: -6, boxShadow: "0 24px 48px -24px rgba(74, 222, 128, 0.35)" }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      className="overflow-hidden rounded-[20px] border border-grey-pale bg-white flex flex-col"
    >
      <div className="relative bg-dark p-8 overflow-hidden">
        <div className="absolute inset-0 grid-pattern-subtle opacity-60 pointer-events-none" />
        <div className="relative flex items-center gap-4">
          <div
            className="flex items-center justify-center w-12 h-12 rounded-[14px]"
            style={{ background: "#4ade80" }}
          >
            <Icon size={22} className="text-dark" strokeWidth={2.25} />
          </div>
          <div>
            <h3 className="text-[30px] font-extrabold text-white leading-none tracking-tight">
              {title}
            </h3>
            <p className="mt-1.5 text-sm font-medium" style={{ color: "#4ade80" }}>
              {tagline}
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <p className="text-base font-light leading-[1.8] text-grey">{description}</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {chips.map((c) => (
            <div
              key={c.n}
              className="rounded-xl border border-grey-pale bg-grey-bg p-4"
            >
              <div className="eyebrow text-green-deep">
                {c.n} — {c.title}
              </div>
              <div className="mt-2 text-sm font-medium text-dark leading-snug">
                {c.body}
              </div>
            </div>
          ))}
        </div>

        <ul className="mt-8 space-y-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <span
                className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}
              >
                <Check size={12} className="text-green-deep" strokeWidth={3} />
              </span>
              <span className="text-sm leading-relaxed text-grey">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-6 border-t border-grey-pale flex flex-wrap gap-3">
          <motion.a
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-green-deep px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-dark transition-colors"
          >
            Request a Demo
            <ArrowRight size={14} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center rounded-full border border-grey-pale px-5 py-2.5 text-sm font-semibold text-dark hover:border-dark transition-colors"
          >
            Learn More
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Products() {
  return (
    <motion.section
      id="products"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="eyebrow text-green-deep">Our Products</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-dark">
            Two Powerful Platforms, One Trusted Partner
          </h2>
          <p className="mt-4 text-lg font-light leading-[1.8] text-grey">
            From digital tax administration to intelligent service management,
            our platforms are designed to streamline operations and deliver
            measurable results.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-7">
          {products.map((p) => (
            <ProductCard key={p.title} product={p} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
