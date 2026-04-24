"use client";

import { RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

import { Button, buttonVariants } from "@/src/components/ui/Button";
import { Card } from "@/src/components/ui/Card";
import { cn } from "@/src/lib/utils";

type TaxStatus = "active" | "late" | null;
type Ownership = "self" | "other" | null;
type Preference = "online" | "offline" | null;

type AnswerState = {
  ownership: Ownership;
  preference: Preference;
  taxStatus: TaxStatus;
};

type ResultCopy = {
  cta: string;
  description: string;
  href: string;
  title: string;
};

const questions = [
  {
    key: "taxStatus",
    options: [
      { label: "Masih aktif", value: "active" },
      { label: "Sudah telat", value: "late" },
    ],
    question: "Pajak kendaraanmu sekarang bagaimana?",
  },
  {
    key: "ownership",
    options: [
      { label: "Atas nama saya", value: "self" },
      { label: "Bukan atas nama saya", value: "other" },
    ],
    question: "Kendaraan atas nama siapa?",
  },
  {
    key: "preference",
    options: [
      { label: "Online dari HP", value: "online" },
      { label: "Datang langsung", value: "offline" },
    ],
    question: "Kamu ingin bayar dengan cara apa?",
  },
] as const;

const answerLabels = {
  active: "Masih aktif",
  late: "Sudah telat",
  offline: "Datang langsung",
  online: "Online dari HP",
  other: "Bukan atas nama saya",
  self: "Atas nama saya",
};

const initialState: AnswerState = {
  ownership: null,
  preference: null,
  taxStatus: null,
};

function getResult({ ownership, preference, taxStatus }: AnswerState): ResultCopy {
  if (ownership === "other") {
    return {
      cta: "Lihat panduan dokumen",
      description:
        "Kalau kendaraan bukan atas namamu, siapkan data pemilik sesuai STNK agar proses lebih aman.",
      href: "#dokumen",
      title: "Pastikan data pemilik kendaraan sesuai.",
    };
  }

  if (preference === "offline") {
    return {
      cta: "Lihat checklist",
      description:
        "Siapkan dokumen kendaraan dan cek jadwal layanan sebelum datang agar tidak bolak-balik.",
      href: "#dokumen",
      title: "Kamu bisa datang ke SAMSAT terdekat.",
    };
  }

  if (taxStatus === "active" && ownership === "self" && preference === "online") {
    return {
      cta: "Download SIGNAL",
      description:
        "Siapkan STNK dan data kendaraan, lalu lanjutkan pembayaran dari HP tanpa antre.",
      href: "#final-cta",
      title: "Kamu bisa langsung bayar lewat SIGNAL.",
    };
  }

  if (taxStatus === "late" && preference === "online") {
    return {
      cta: "Cek lewat SIGNAL",
      description:
        "Beberapa kondisi masih bisa diproses online, tapi pajak yang terlalu lama telat bisa perlu pengecekan langsung.",
      href: "#final-cta",
      title: "Cek dulu estimasi dan status telatmu.",
    };
  }

  return {
    cta: "Mulai cek",
    description: "Jawab kondisi kendaraanmu untuk mengetahui cara bayar yang paling sesuai.",
    href: "#cek-kondisi",
    title: "Kami bantu arahkan langkah terbaik.",
  };
}

export function DecisionAssistant() {
  const [answers, setAnswers] = useState<AnswerState>(initialState);
  const [step, setStep] = useState(0);

  const isComplete = step >= questions.length;
  const result = useMemo(() => getResult(answers), [answers]);
  const currentQuestion = questions[step];

  function handleAnswer(value: string) {
    const key = questions[step].key;

    setAnswers((prev) => ({
      ...prev,
      [key]: value,
    }));
    setStep((prev) => prev + 1);
  }

  function reset() {
    setAnswers(initialState);
    setStep(0);
  }

  return (
    <Card className="overflow-hidden p-6 md:p-8">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium leading-6 text-text-muted">
              Progress {Math.min(step + 1, 3)}/3
            </p>
            <div className="mt-3 flex gap-2">
              {[0, 1, 2].map((item) => (
                <span
                  key={item}
                  className={cn(
                    "h-2 w-12 rounded-full transition duration-200",
                    item < step ? "bg-primary-600" : "bg-neutral-200",
                  )}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {(Object.entries(answers) as Array<[keyof AnswerState, AnswerState[keyof AnswerState]]>)
              .filter(([, value]) => value)
              .map(([key, value]) => (
                <span
                  key={key}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-text-secondary"
                >
                  {answerLabels[value as keyof typeof answerLabels]}
                </span>
              ))}
          </div>
        </div>

        {!isComplete && currentQuestion ? (
          <div className="space-y-5">
            <h3 className="text-2xl font-medium leading-[1.3] tracking-[-0.02em] text-text-primary md:text-3xl md:leading-[1.35]">
              {currentQuestion.question}
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {currentQuestion.options.map((option) => {
                const isSelected = answers[currentQuestion.key] === option.value;

                return (
                  <button
                    key={option.value}
                    aria-pressed={isSelected}
                    className={cn(
                      "rounded-3xl border px-5 py-5 text-left text-base font-medium transition duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-page",
                      isSelected
                        ? "border-primary-600 bg-primary-600 text-white"
                        : "border-neutral-200 bg-white text-text-primary hover:border-primary-200 hover:bg-primary-50/60",
                    )}
                    onClick={() => handleAnswer(option.value)}
                    type="button"
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-3xl border border-primary-100 bg-primary-50 p-6 md:p-8">
              <div className="space-y-4">
                <p className="text-sm font-medium text-primary-700">Rekomendasi</p>
                <h3 className="text-2xl font-medium leading-[1.3] tracking-[-0.02em] text-text-primary md:text-3xl md:leading-[1.35]">
                  {result.title}
                </h3>
                <p className="max-w-2xl text-base font-normal leading-7 text-text-secondary">
                  {result.description}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a className={buttonVariants({})} href={result.href}>
                    {result.cta}
                  </a>
                  <Button
                    iconLeft={<RotateCcw className="h-4 w-4" />}
                    onClick={reset}
                    variant="ghost"
                  >
                    Ulangi
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
