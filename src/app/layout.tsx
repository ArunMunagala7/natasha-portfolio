import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Natasha Jha — Portfolio",
  description: "MCS @ UC Irvine · Cybersecurity",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
