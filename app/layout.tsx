import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KPI Benchmark Tracker — Compare Your Startup Metrics Against Peers",
  description: "Anonymous benchmarking dashboard comparing your startup's KPIs against similar-stage companies in your industry. Know where you stand."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="43cc73f0-54ba-4fc1-a8c9-66f4d23f7176"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
