"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { Container } from "@/src/components/ui/Container";
import { Section } from "@/src/components/ui/Section";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { cn } from "@/src/lib/utils";

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
  const [openItem, setOpenItem] = useState<number | null>(0);

  return (
    <Section className="bg-white" id="faq">
      <Container>
        <div className="space-y-10">
          <SectionHeader
            description="Pertanyaan singkat ini membantu menjawab keraguan paling umum sebelum user lanjut."
            eyebrow="FAQ"
            title="Pertanyaan yang paling sering muncul"
          />

          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openItem === index;

              return (
                <div
                  key={item.question}
                  className="rounded-3xl border border-neutral-200/80 bg-neutral-50 p-2 shadow-soft"
                >
                  <button
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 rounded-[1.35rem] px-4 py-4 text-left text-base font-medium text-text-primary transition duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-page"
                    onClick={() => setOpenItem(isOpen ? null : index)}
                    type="button"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-text-muted transition duration-200",
                        isOpen ? "rotate-180" : "",
                      )}
                    />
                  </button>
                  {isOpen ? (
                    <div className="px-4 pb-4 pt-1">
                      <p className="max-w-3xl text-base font-normal leading-7 text-text-secondary">
                        {item.answer}
                      </p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
