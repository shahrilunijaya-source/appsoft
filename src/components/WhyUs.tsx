"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Users,
  Activity,
  Monitor,
  Zap,
  Layers,
  CheckCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Card = { Icon: LucideIcon; title: string; body: string };

const cards: Card[] = [
  {
    Icon: Shield,
    title: "ITIL-Aligned Framework",
    body: "Our support model is built on ITIL best practices — ensuring structured incident management, predictable service levels, and continuous improvement.",
  },
  {
    Icon: Clock,
    title: "Fast Time-to-Value",
    body: "Our COTS-based products are ready to deploy — no lengthy custom builds. Go live in weeks, not months, with proven platforms that deliver measurable ROI from day one.",
  },
  {
    Icon: Users,
    title: "Dedicated Support Team",
    body: "From Resident Engineers on-site to a Service Delivery Manager overseeing SLA compliance — you get a real team, not a ticket queue.",
  },
  {
    Icon: Activity,
    title: "Proactive, Not Reactive",
    body: "Monthly SLA reports, performance review meetings, early anomaly detection, and continuous improvement plans — we anticipate problems before they impact your operations.",
  },
  {
    Icon: Monitor,
    title: "Multi-Channel Access",
    body: "Phone, email, or web-based helpdesk portal — all feeding into a single system with automated ticketing, real-time status updates, and full audit trails.",
  },
  {
    Icon: Zap,
    title: "AI-Ready Architecture",
    body: "Our platforms are built with AI integration in mind — from data structures and API layers to governance frameworks — ensuring future-ready scalability.",
  },
  {
    Icon: Layers,
    title: "Scalable & Modular",
    body: "Add users, modules, or new capabilities without re-architecture. Our platforms grow with your organisation — from pilots to enterprise-wide rollouts.",
  },
  {
    Icon: CheckCircle,
    title: "Compliance-First Design",
    body: "Every solution is built with regulatory compliance, data governance, and audit-readiness as core design principles for both public sector and regulated industries.",
  },
];

export default function WhyUs() {
  return (
    <motion.section
      id="why"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-grey-bg py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="eyebrow text-green-deep">Why Us</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-dark">
            Built for Reliability. Designed for Results.
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {cards.map(({ Icon, title, body }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-[20px] border border-grey-pale bg-white p-7"
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl"
                style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}
              >
                <Icon size={22} className="text-green-deep" strokeWidth={2.25} />
              </div>
              <h3 className="mt-5 text-[17px] font-bold text-dark leading-snug">
                {title}
              </h3>
              <p className="mt-2.5 text-sm font-light leading-[1.7] text-grey">
                {body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
