"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    n: "01",
    cat: "Intelligent Automation",
    title: "Agentic Workflow Automation",
    body: "Deploy AI agents that autonomously execute multi-step tasks — from data entry and document review to cross-system orchestration — freeing your teams to focus on high-value work. Our agents are outcome-driven, not just reactive.",
  },
  {
    n: "02",
    cat: "Decision Intelligence",
    title: "Context-Aware AI & Analytics",
    body: "AI that knows your data is the only useful AI. We build context-aware models trained on your organisation's specific workflows, policy rules, and historical data — delivering real-time insights, risk scoring, and predictive recommendations.",
  },
  {
    n: "03",
    cat: "Service Augmentation",
    title: "AI-Enhanced Helpdesk & Support",
    body: "Layer AI intelligence on top of your existing helpdesk operations — with smart ticket classification, automated first-call resolution, predictive escalation, and natural language interfaces that reduce resolution time by up to 50%.",
  },
  {
    n: "04",
    cat: "Governance & Compliance",
    title: "Responsible AI Deployment",
    body: "Enterprise AI must be safe, auditable, and compliant. We implement role-based access controls, comprehensive audit logs, rollback mechanisms, and SLA-aligned governance frameworks — ensuring your AI agents operate within defined guardrails.",
  },
  {
    n: "05",
    cat: "Integration",
    title: "Multi-Agent Orchestration",
    body: "Connect specialised AI agents across your technology stack — finance, HR, compliance, operations — through a unified orchestration layer. Agents collaborate, share context, and coordinate workflows across organisational boundaries.",
  },
  {
    n: "06",
    cat: "Modernisation",
    title: "Legacy System AI Uplift",
    body: "We don't just bolt AI onto legacy systems — we modernise the data foundation, standardise formats for agent compatibility, and establish continuous validation frameworks so your AI investment delivers long-term, scalable value.",
  },
];

export default function AgenticAI() {
  return (
    <motion.section
      id="agentic"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative bg-dark text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern-subtle pointer-events-none" />
      <div
        aria-hidden
        className="absolute top-1/4 -right-40 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "#4ade80", filter: "blur(100px)", opacity: 0.1 }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="eyebrow" style={{ color: "#4ade80" }}>
            Sub-Services
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">
            AI & Agentic Solutions
          </h2>
          <p className="mt-4 text-lg font-light leading-[1.8] text-white/50">
            We embed intelligent, autonomous AI agents into enterprise workflows
            — moving your organisation from manual processes to self-executing,
            adaptive systems that reason, decide, and act at machine speed.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {cards.map((c) => (
            <motion.div
              key={c.n}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="agentic-card rounded-[20px] p-7 bg-dark-2 transition-colors"
            >
              <div className="eyebrow" style={{ color: "#4ade80" }}>
                {c.n} — {c.cat}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white leading-tight">
                {c.title}
              </h3>
              <p className="mt-4 text-sm font-light leading-[1.75] text-white/55">
                {c.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div
          className="mt-14 rounded-[20px] p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          style={{
            background: "#1f2937",
            border: "1px solid rgba(74,222,128,0.15)",
          }}
        >
          <p className="text-xl md:text-2xl font-semibold text-white max-w-2xl leading-snug">
            Ready to move from AI experimentation to measurable business
            outcomes?
          </p>
          <motion.a
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-dark hover:bg-green-dark transition-colors w-fit"
          >
            Talk to Our AI Team
            <ArrowRight size={16} />
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
