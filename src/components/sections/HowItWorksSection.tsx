"use client";

import { ArrowRightLeft, Files, Smartphone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { Container } from "@/src/components/ui/Container";
import { Section } from "@/src/components/ui/Section";

const steps = [
  {
    description: "Ketahui dulu jalur yang paling sesuai sebelum melakukan pembayaran.",
    icon: ArrowRightLeft,
    label: "Cek kondisi kendaraan",
    value: "01",
  },
  {
    description: "Siapkan dokumen inti agar proses terasa lebih singkat dan aman.",
    icon: Files,
    label: "Siapkan dokumen",
    value: "02",
  },
  {
    description: "Kalau sudah siap, lanjutkan pembayaran lewat SIGNAL dari HP.",
    icon: Smartphone,
    label: "Lanjut bayar lewat SIGNAL",
    value: "03",
  },
];

export function HowItWorksSection() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion ? { y: 0 } : { y: 18 };
  const imageSettle = shouldReduceMotion ? { scale: 1, y: 0 } : { scale: 0.985, y: 18 };

  return (
    <Section className="bg-slate-50" id="cara-bayar">
      <Container>
        <motion.div
          className="space-y-8 md:space-y-10"
          initial="hidden"
          transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.08 }}
          viewport={{ amount: 0.28, once: true }}
          whileInView="visible"
        >
          <motion.h2
            className="max-w-[680px] text-3xl font-medium leading-[1.3] tracking-[-0.02em] text-text-primary md:text-4xl md:leading-[1.35]"
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            variants={{
              hidden: reveal,
              visible: { y: 0 },
            }}
          >
            Dari bingung jadi selesai dalam 3 langkah
          </motion.h2>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,46%)_minmax(0,54%)] lg:items-stretch">
            <motion.div
              className="rounded-[24px] border border-slate-200/80 bg-white p-4 shadow-soft md:rounded-[28px] md:p-7"
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              variants={{
                hidden: reveal,
                visible: { y: 0 },
              }}
            >
              <div className="divide-y divide-slate-200/80">
                {steps.map(({ description, icon: Icon, label, value }, index) => (
                  <motion.div
                    className="group flex gap-4 py-5 first:pt-0 last:pb-0 md:gap-5 md:py-6"
                    key={value}
                    transition={{
                      delay: shouldReduceMotion ? 0 : index * 0.05,
                      duration: 0.48,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    variants={{
                      hidden: shouldReduceMotion ? { x: 0 } : { x: -12 },
                      visible: { x: 0 },
                    }}
                    whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-semibold tracking-[0.16em] text-primary-600">
                        {value}
                      </span>
                      <motion.span
                        className="mt-3 flex h-9 w-9 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-colors duration-200 group-hover:bg-primary-600 group-hover:text-white md:mt-4 md:h-10 md:w-10"
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        variants={{
                          hidden: shouldReduceMotion ? { scale: 1 } : { scale: 0.9 },
                          visible: { scale: 1 },
                        }}
                      >
                        <Icon className="h-4 w-4 md:h-5 md:w-5" />
                      </motion.span>
                    </div>

                    <div className="min-w-0 space-y-2 pt-0.5">
                      <h3 className="text-xl font-medium leading-7 tracking-[-0.02em] text-neutral-900">
                        {label}
                      </h3>
                      <p className="max-w-md text-base leading-7 text-neutral-600">
                        {description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative min-h-[300px] overflow-hidden rounded-[24px] bg-slate-200 shadow-card md:min-h-[360px] md:rounded-[30px] lg:min-h-[520px]"
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              variants={{
                hidden: imageSettle,
                visible: { scale: 1, y: 0 },
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            >
              <motion.div
                className="pointer-events-none absolute inset-0"
                initial={shouldReduceMotion ? undefined : { scale: 1.035 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ amount: 0.45, once: true }}
                whileInView={shouldReduceMotion ? undefined : { scale: 1 }}
              >
                <Image
                  alt="Ilustrasi alur singkat pembayaran pajak kendaraan lewat HP"
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  src="/images/alur-singkat.png"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/34 via-neutral-900/4 to-white/10" />
              <motion.div
                className="absolute bottom-3 left-3 right-3 rounded-[18px] border border-white/70 bg-white/95 p-3 shadow-card backdrop-blur-sm md:bottom-5 md:left-5 md:right-auto md:w-[320px] md:rounded-[22px] md:p-4"
                transition={{ delay: shouldReduceMotion ? 0 : 0.18, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                variants={{
                  hidden: shouldReduceMotion ? { y: 0 } : { y: 14 },
                  visible: { y: 0 },
                }}
              >
                <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 shrink-0 text-neutral-800" />
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">
                      Mulai dari kondisi kendaraan
                    </p>
                    <p className="mt-1 text-xs leading-5 text-neutral-600">
                      Lalu siapkan dokumen sebelum lanjut ke SIGNAL.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
