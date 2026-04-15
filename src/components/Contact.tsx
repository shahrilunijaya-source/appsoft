"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Detail = { Icon: LucideIcon; label: string; lines: string[] };

const details: Detail[] = [
  { Icon: Phone, label: "Phone", lines: ["+603 2166 6558"] },
  { Icon: Mail, label: "Email", lines: ["info@appsoftasia.com"] },
  {
    Icon: MapPin,
    label: "Address",
    lines: ["D-6-8, Megan Avenue 1", "Jalan Tun Razak, 50400 Kuala Lumpur, Malaysia"],
  },
  {
    Icon: Clock,
    label: "Hours",
    lines: [
      "Monday – Friday, 9:00 AM – 5:00 PM",
      "On-call support available for critical incidents",
    ],
  },
];

const inputClass =
  "w-full rounded-xl border border-grey-pale bg-white px-4 py-3 text-sm font-medium text-dark placeholder:text-grey-light transition-colors";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="eyebrow text-green-deep">Contact</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-dark">
            Let&apos;s Build Something Remarkable Together
          </h2>
          <p className="mt-4 text-lg font-light leading-[1.8] text-grey">
            Whether you&apos;re exploring iTax, looking to modernise your
            helpdesk, or ready to deploy AI-driven solutions — we&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h3 className="text-2xl font-bold text-dark">
              AppSoft Asia Sdn Bhd
            </h3>
            <p className="mt-3 text-base font-light leading-[1.8] text-grey">
              Incorporated since 2018, serving enterprises and government
              agencies across the region.
            </p>

            <div className="mt-8 space-y-5">
              {details.map(({ Icon, label, lines }) => (
                <div key={label} className="flex gap-4">
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0"
                    style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}
                  >
                    <Icon size={18} className="text-green-deep" strokeWidth={2.25} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-widest uppercase text-grey-light">
                      {label}
                    </div>
                    <div className="mt-1 text-sm font-medium text-dark leading-relaxed">
                      {lines.map((l) => (
                        <div key={l}>{l}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[20px] border border-grey-pale bg-grey-bg p-8 md:p-10 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="flex items-center justify-center w-16 h-16 rounded-full"
                    style={{ background: "#4ade80" }}
                  >
                    <Check size={32} className="text-dark" strokeWidth={3} />
                  </motion.div>
                  <h3 className="mt-6 text-2xl font-bold text-dark">
                    Message sent
                  </h3>
                  <p className="mt-2 text-sm text-grey max-w-sm">
                    Thanks for reaching out. A member of our team will be in
                    touch within one business day.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest text-grey-light mb-2">
                        First Name
                      </label>
                      <input required type="text" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest text-grey-light mb-2">
                        Last Name
                      </label>
                      <input required type="text" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-grey-light mb-2">
                      Work Email
                    </label>
                    <input required type="email" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-grey-light mb-2">
                      Organisation
                    </label>
                    <input type="text" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-grey-light mb-2">
                      I&apos;m interested in
                    </label>
                    <select required defaultValue="" className={inputClass}>
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option>iTax — Digital Tax Administration</option>
                      <option>Helpdesk — ITIL Service Management</option>
                      <option>AI & Agentic Solutions</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-grey-light mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      className={inputClass + " resize-none"}
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.01, y: -1 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full rounded-full bg-green-deep px-6 py-3.5 text-sm font-semibold text-white hover:bg-green-dark transition-colors"
                  >
                    Send Message
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
