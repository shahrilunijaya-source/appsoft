import Logo from "./Logo";

const productsLinks = [
  { href: "#products", label: "iTax" },
  { href: "#products", label: "Helpdesk System" },
  { href: "#agentic", label: "AI & Agentic" },
];

const companyLinks = [
  { href: "#about", label: "About Us" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Logo size="md" />
            <p className="mt-5 text-sm font-light leading-[1.7] text-white/50 max-w-xs">
              Intelligent software solutions for governments, enterprises, and
              growing businesses. Incorporated in Kuala Lumpur, Malaysia since
              2018.
            </p>
            <span
              className="mt-5 inline-flex items-center rounded-full border border-green/30 bg-green/10 px-3 py-1 text-xs font-semibold"
              style={{ color: "#4ade80" }}
            >
              SSM Registered · Malaysia
            </span>
          </div>

          <div>
            <div className="eyebrow text-white/40">Products</div>
            <ul className="mt-4 space-y-3 text-sm">
              {productsLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/40 hover:text-green transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow text-white/40">Company</div>
            <ul className="mt-4 space-y-3 text-sm">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/40 hover:text-green transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow text-white/40">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-white/40">
              <li>+603 2166 6558</li>
              <li>
                <a
                  href="mailto:info@appsoftasia.com"
                  className="hover:text-green transition-colors"
                >
                  info@appsoftasia.com
                </a>
              </li>
              <li>D-6-8 Megan Avenue 1, KL</li>
            </ul>
          </div>
        </div>

        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/40"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div>© 2025 AppSoft Asia Sdn Bhd. All rights reserved.</div>
          <div>Kuala Lumpur, Malaysia</div>
        </div>
      </div>
    </footer>
  );
}
