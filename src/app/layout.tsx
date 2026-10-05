import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PROMPUBI - Builder Profile Dashboard | Hyderabad Real Estate",
  description: "Enterprise TS-RERA verified builder profile dashboard and directory for premier developers in Hyderabad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-slate-100 text-slate-900">{children}</body>
    </html>
  );
}
