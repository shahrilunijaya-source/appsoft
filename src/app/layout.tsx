import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AppSoft Asia — Intelligent Software Solutions",
  description:
    "AppSoft Asia Sdn Bhd delivers enterprise-grade software solutions including iTax digital tax administration, ITIL-based helpdesk, and AI agentic systems for governments and enterprises in Malaysia.",
  keywords:
    "AppSoft Asia, iTax, helpdesk software, ITIL, AI solutions, Malaysia IT company, digital tax administration, enterprise software KL",
  openGraph: {
    title: "AppSoft Asia — Intelligent Software Solutions",
    description: "Powering digital transformation across Malaysia and the region.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
