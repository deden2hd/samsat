import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";

import "./globals.css";

const googleSans = Google_Sans({
  display: "swap",
  fallback: ["Inter", "system-ui", "sans-serif"],
  subsets: ["latin"],
  variable: "--font-google-sans",
});

export const metadata: Metadata = {
  title: "SIGNAL / SAMSAT Digital",
  description:
    "Landing page decision assistant untuk membantu memahami pembayaran pajak kendaraan dan mengarah ke SIGNAL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${googleSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-page font-sans font-medium text-text-primary">{children}</body>
    </html>
  );
}
