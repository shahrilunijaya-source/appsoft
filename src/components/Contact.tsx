"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Check, AlertCircle, Loader2 } from "lucide-react";
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

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
    );
    formData.append("subject", "New enquiry from appsoftasia.com");
    formData.append("from_name", "AppSoft Asia Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
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
              {status === "success" ? (
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
                      <label
                        htmlFor="firstName"
                        className="block text-xs font-semibold uppercase tracking-widest text-grey-light mb-2"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        required
                        type="text"
                        autoComplete="given-name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-xs font-semibold uppercase tracking-widest text-grey-light mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        required
                        type="text"
                        autoComplete="family-name"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-widest text-grey-light mb-2"
                    >
                      Work Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      autoComplete="email"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="organisation"
                      className="block text-xs font-semibold uppercase tracking-widest text-grey-light mb-2"
                    >
                      Organisation
                    </label>
                    <input
                      id="organisation"
                      name="organisation"
                      type="text"
                      autoComplete="organization"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-xs font-semibold uppercase tracking-widest text-grey-light mb-2"
                    >
                      I&apos;m interested in
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      defaultValue=""
                      className={inputClass}
                    >
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
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-widest text-grey-light mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className={inputClass + " resize-none"}
                    />
                  </div>
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />

                  {status === "error" && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
                    >
                      <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <motion.button
                    whileHover={
                      status !== "sending" ? { scale: 1.01, y: -1 } : undefined
                    }
                    whileTap={
                      status !== "sending" ? { scale: 0.99 } : undefined
                    }
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-green-deep px-6 py-3.5 text-sm font-semibold text-white hover:bg-green-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
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
