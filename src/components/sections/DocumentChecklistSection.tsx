"use client";

import { CheckCircle2, FileText } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { Container } from "@/src/components/ui/Container";
import { Section } from "@/src/components/ui/Section";

const documents = ["STNK kendaraan", "KTP sesuai data", "Nomor polisi", "Data kendaraan"];

export function DocumentChecklistSection() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion ? { y: 0 } : { y: 18 };
  const imageSettle = shouldReduceMotion ? { scale: 1, y: 0 } : { scale: 0.985, y: 18 };

  return (
    <Section className="bg-white" id="dokumen">
      <Container>
        <motion.div
          className="space-y-8 md:space-y-10"
          initial="hidden"
          transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.08 }}
          viewport={{ amount: 0.28, once: true }}
          whileInView="visible"
        >
          <motion.h2
            className="max-w-[640px] text-3xl font-medium leading-[1.3] tracking-[-0.02em] text-neutral-900 md:text-4xl md:leading-[1.35]"
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            variants={{
              hidden: reveal,
              visible: { y: 0 },
            }}
          >
            Siapkan dokumen sebelum lanjut bayar
          </motion.h2>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-stretch">
            <motion.div
              className="rounded-[24px] border border-slate-200/80 bg-slate-50 p-4 shadow-soft md:rounded-[30px] md:p-8"
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              variants={{
                hidden: reveal,
                visible: { y: 0 },
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
            >
              <div className="flex h-full flex-col justify-between gap-6 md:min-h-[420px] md:gap-10">
                <div className="space-y-5 md:space-y-6">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-neutral-900" />
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">
                      Dokumen utama
                    </p>
                  </div>

                  <div className="space-y-3">
                    {documents.map((document, index) => (
                      <motion.div
                        className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 transition-colors duration-200 hover:border-primary-200 hover:bg-primary-50/55 md:py-4"
                        key={document}
                        transition={{
                          delay: shouldReduceMotion ? 0 : index * 0.045,
                          duration: 0.42,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        variants={{
                          hidden: shouldReduceMotion ? { x: 0 } : { x: -12 },
                          visible: { x: 0 },
                        }}
                        whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                      >
                        <motion.span
                          className="flex shrink-0 text-primary-600"
                          transition={{ delay: shouldReduceMotion ? 0 : index * 0.05, duration: 0.26 }}
                          variants={{
                            hidden: shouldReduceMotion ? { scale: 1 } : { scale: 0.82 },
                            visible: { scale: 1 },
                          }}
                        >
                          <CheckCircle2 className="h-5 w-5 transition-colors duration-200 group-hover:text-primary-700" />
                        </motion.span>
                        <p className="text-base font-medium text-neutral-900">{document}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="rounded-2xl border border-primary-100 bg-primary-50 px-4 py-4"
                  transition={{ delay: shouldReduceMotion ? 0 : 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  variants={{
                    hidden: shouldReduceMotion ? { y: 0 } : { y: 12 },
                    visible: { y: 0 },
                  }}
                >
                  <p className="text-sm font-medium leading-6 text-primary-800">
                    Kalau dokumen sudah siap, proses cek kondisi dan pembayaran akan terasa lebih
                    jelas.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="relative min-h-[300px] overflow-hidden rounded-[24px] bg-slate-100 shadow-card md:min-h-[420px] md:rounded-[30px]"
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
                  alt="Dokumen kendaraan, identitas, dan ponsel untuk pembayaran pajak"
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  src="/images/checklist-dokumen.png"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/30 via-transparent to-white/5" />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
