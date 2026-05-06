"use client";

import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Badge } from "@/src/components/ui/Badge";
import { Container } from "@/src/components/ui/Container";
import { Section } from "@/src/components/ui/Section";

const faqs = [
  {
    answer:
      "Tidak semua kondisi selalu sama, jadi cek dulu status kendaraan dan dokumenmu sebelum lanjut.",
    question: "Apakah semua pajak kendaraan bisa dibayar online?",
  },
  {
    answer:
      "Beberapa kondisi masih bisa diproses online, tetapi keterlambatan tertentu bisa perlu pengecekan langsung.",
    question: "Kalau pajak telat, apakah masih bisa lewat SIGNAL?",
  },
  {
    answer:
      "Kalau kendaraan bukan atas nama kamu, siapkan data pemilik sesuai STNK agar proses lebih aman.",
    question: "Kalau kendaraan bukan atas nama saya bagaimana?",
  },
  {
    answer:
      "Siapkan STNK, KTP sesuai data kendaraan, nomor polisi, dan data kendaraan sebelum mulai.",
    question: "Apa saja dokumen yang perlu disiapkan?",
  },
  {
    answer:
      "Tidak selalu. Website ini membantu mengarahkan apakah kamu bisa lanjut online atau lebih aman datang langsung.",
    question: "Apakah tetap perlu datang ke SAMSAT?",
  },
];

export function FAQSection() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion ? { y: 0 } : { y: 16 };

  return (
    <Section className="bg-white" id="faq">
      <Container className="max-w-[1240px] px-4 md:px-6 lg:px-8">
        <motion.div
          className="grid gap-8 lg:grid-cols-[minmax(0,36%)_minmax(0,64%)] lg:gap-12"
          initial="hidden"
          transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.08 }}
          viewport={{ amount: 0.25, once: true }}
          whileInView="visible"
        >
          <motion.div
            className="space-y-4"
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            variants={{
              hidden: reveal,
              visible: { y: 0 },
            }}
          >
            <Badge className="w-fit" variant="soft">
              FAQ
            </Badge>
            <div className="space-y-4">
              <h2 className="max-w-[420px] text-3xl font-medium leading-[1.35] tracking-[-0.02em] text-neutral-900 md:text-4xl">
                Pertanyaan yang paling sering muncul
              </h2>
              <p className="max-w-[480px] text-base leading-7 text-neutral-600">
                Jawaban singkat ini membantu mengurangi keraguan sebelum user lanjut ke langkah
                berikutnya.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-3"
            transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.05 }}
            variants={{
              hidden: shouldReduceMotion ? { y: 0 } : { y: 8 },
              visible: { y: 0 },
            }}
          >
            {faqs.map((item, index) => (
              <details
                className="group relative z-10 rounded-lg border border-slate-200 bg-white transition duration-200 hover:border-slate-300"
                key={item.question}
                open={index === 0}
              >
                <summary className="flex w-full touch-manipulation cursor-pointer list-none items-center justify-between gap-4 rounded-lg px-5 py-5 text-left text-[17px] font-medium leading-7 text-neutral-900 transition duration-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-page md:text-lg [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-neutral-900 transition duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 pt-0">
                  <p className="max-w-3xl text-[17px] font-normal leading-8 text-neutral-600">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
