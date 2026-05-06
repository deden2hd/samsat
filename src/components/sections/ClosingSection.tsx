"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

import { buttonVariants } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";

const navigation = [
  { href: "#cek-kondisi", label: "Cek Kondisi" },
  { href: "#cara-bayar", label: "Cara Bayar" },
  { href: "#dokumen", label: "Dokumen" },
  { href: "#faq", label: "FAQ" },
];

const supportLinks = [
  { href: "#final-cta", label: "Download SIGNAL" },
  { href: "#cek-kondisi", label: "Cek ulang kondisi" },
  { href: "#dokumen", label: "Checklist dokumen" },
];

const contactItems = [
  {
    icon: MapPin,
    value: "Kantor SAMSAT sesuai wilayah kendaraan",
  },
  {
    icon: Mail,
    value: "Kanal bantuan resmi SIGNAL",
  },
  {
    icon: Phone,
    value: "Layanan SAMSAT daerah",
  },
];

export function ClosingSection() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion ? { y: 0 } : { y: 18 };

  return (
    <section
      className="relative isolate overflow-hidden bg-neutral-900 bg-cover bg-center py-14 text-white md:py-20"
      id="final-cta"
      style={{
        backgroundImage: "url('/images/hero-section.png')",
      }}
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-white/35 via-white/12 to-neutral-950/18" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32 bg-gradient-to-b from-white to-transparent" />

      <Container className="relative z-10 max-w-[1240px] px-4 md:px-6 lg:px-8">
        <motion.div
          className="space-y-16 md:space-y-28"
          initial="hidden"
          transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.08 }}
          viewport={{ amount: 0.22, once: true }}
          whileInView="visible"
        >
          <motion.div
            className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center"
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            variants={{
              hidden: reveal,
              visible: { y: 0 },
            }}
          >
            <motion.div
              className="space-y-4"
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              variants={{
                hidden: reveal,
                visible: { y: 0 },
              }}
            >
              <h2 className="text-3xl font-medium leading-[1.25] tracking-[-0.02em] text-neutral-900 md:text-5xl md:leading-[1.18]">
                Sudah tahu kondisimu?
                <br />
                Lanjutkan lewat SIGNAL.
              </h2>
              <p className="mx-auto max-w-2xl text-base font-normal leading-7 text-neutral-600 md:text-lg md:leading-8">
                Mulai dari cek status, siapkan dokumen, lalu bayar dengan cara yang paling sesuai.
              </p>
            </motion.div>

            <motion.div
              className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
              transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
              variants={{
                hidden: shouldReduceMotion ? { y: 0 } : { y: 12 },
                visible: { y: 0 },
              }}
            >
              <motion.div
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
              >
                <Link
                  className={buttonVariants({
                    className: "h-14 w-full px-6 sm:w-auto",
                    radius: "rounded",
                    size: "lg",
                    variant: "secondary",
                  })}
                  href="#cek-kondisi"
                >
                  Cek kondisi lagi
                </Link>
              </motion.div>
              <motion.div
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
              >
                <Link
                  className={buttonVariants({
                    className: "h-14 w-full gap-3 px-6 sm:w-auto",
                    radius: "rounded",
                    size: "lg",
                    variant: "dark",
                  })}
                  href="#beranda"
                >
                  <span>Download SIGNAL</span>
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.footer
            className="rounded-[18px] border border-slate-200/80 bg-white p-5 text-neutral-900 shadow-card md:p-10"
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            variants={{
              hidden: shouldReduceMotion ? { scale: 1, y: 0 } : { scale: 0.99, y: 20 },
              visible: { scale: 1, y: 0 },
            }}
          >
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-[1.15fr_0.62fr_0.62fr_1.05fr] lg:gap-10">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <motion.span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900 text-sm font-semibold text-white shadow-soft"
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={shouldReduceMotion ? undefined : { rotate: -4, scale: 1.04 }}
                  >
                    S
                  </motion.span>
                  <div>
                    <h2 className="text-xl font-semibold tracking-[-0.02em]">SIGNAL</h2>
                    <p className="text-sm font-medium text-neutral-500">SAMSAT Digital</p>
                  </div>
                </div>
                <p className="max-w-lg text-sm font-normal leading-6 text-neutral-600">
                  Website ini adalah konsep desain ulang pengalaman pengguna untuk kebutuhan
                  portfolio.
                </p>
                <div className="flex w-fit items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-neutral-500">
                  <span className="h-2 w-2 rounded-full bg-primary-600" />
                  Public service SaaS concept
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold text-neutral-900">Navigasi</p>
                <div className="flex flex-col items-start gap-3">
                  {navigation.map((item) => (
                    <Link
                      className="text-sm font-medium text-neutral-600 transition duration-200 hover:translate-x-0.5 hover:text-neutral-900"
                      href={item.href}
                      key={item.href}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold text-neutral-900">Aksi Cepat</p>
                <div className="flex flex-col items-start gap-3">
                  {supportLinks.map((item) => (
                    <Link
                      className="text-sm font-medium text-neutral-600 transition duration-200 hover:translate-x-0.5 hover:text-neutral-900"
                      href={item.href}
                      key={item.href}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="space-y-3">
                  {contactItems.map(({ icon: Icon, value }) => (
                    <motion.div
                      className="flex items-start gap-3"
                      key={value}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={shouldReduceMotion ? undefined : { x: 3 }}
                    >
                      <Icon className="mt-1 h-4 w-4 shrink-0 text-neutral-700" />
                      <p className="text-sm font-medium leading-6 text-neutral-600">{value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-slate-200/80 pt-5 text-xs font-medium text-neutral-500 md:mt-10 md:flex-row md:items-center md:justify-between md:pt-6">
              <p>2026 SIGNAL / SAMSAT Digital concept.</p>
              <p>Dibuat untuk pengalaman pembayaran pajak kendaraan yang lebih jelas.</p>
            </div>
          </motion.footer>
        </motion.div>
      </Container>
    </section>
  );
}
