import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Email Scanner – Scan Email Lists for Compliance Violations",
  description: "Upload your email lists and instantly check for missing consent records, expired permissions, and GDPR compliance gaps. Built for EU-facing marketing teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="aef27a0f-965f-42a3-860e-086a06653567"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
