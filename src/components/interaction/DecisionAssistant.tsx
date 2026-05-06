"use client";

import { RotateCcw } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
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
  const shouldReduceMotion = useReducedMotion();

  const isComplete = step >= questions.length;
  const result = useMemo(() => getResult(answers), [answers]);
  const currentQuestion = questions[step];
  const activeProgressIndex = Math.min(step, questions.length - 1);

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
    <Card className="relative z-10 overflow-hidden border-slate-200/80 p-4 shadow-card md:p-6">
      <div className="space-y-4 md:space-y-5">
        <div className="flex flex-col gap-4 border-b border-slate-200/70 pb-4 md:flex-row md:items-end md:justify-between md:pb-5">
          <div>
            <p className="mb-1 text-sm font-medium text-neutral-900">Asisten Cek Kondisi</p>
            <p className="text-sm font-medium leading-6 text-neutral-500">
              Progress {Math.min(step + 1, 3)}/3
            </p>
            <div className="mt-2 flex gap-1.5 md:gap-2">
              {[0, 1, 2].map((item) => (
                <motion.span
                  animate={shouldReduceMotion ? undefined : { scaleX: item <= activeProgressIndex ? 1 : 0.72 }}
                  key={item}
                  className={cn(
                    "h-1.5 w-8 origin-left rounded-full transition-colors duration-200 md:w-10",
                    item <= activeProgressIndex ? "bg-primary-600" : "bg-neutral-200",
                  )}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
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
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600"
                >
                  {answerLabels[value as keyof typeof answerLabels]}
                </span>
              ))}
          </div>
        </div>

        <AnimatePresence initial={false} mode="wait">
          {!isComplete && currentQuestion ? (
            <motion.div
              animate={{ y: 0 }}
              className="space-y-4"
              exit={shouldReduceMotion ? undefined : { y: -8 }}
              initial={shouldReduceMotion ? false : { y: 8 }}
              key={currentQuestion.key}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-lg font-medium leading-[1.3] tracking-[-0.02em] text-neutral-900 md:text-2xl md:leading-[1.35]">
                {currentQuestion.question}
              </h3>
              <div className="grid gap-3 md:grid-cols-2">
                {currentQuestion.options.map((option) => {
                  const isSelected = answers[currentQuestion.key] === option.value;

                  return (
                    <label
                      className={cn(
                        "flex min-h-11 cursor-pointer touch-manipulation items-center rounded-2xl border px-4 py-3 text-left text-sm font-medium transition-colors duration-200 has-[:checked]:border-primary-600 has-[:checked]:bg-primary-600 has-[:checked]:text-white md:min-h-12 md:text-base",
                        isSelected
                          ? "border-primary-600 bg-primary-600 text-white"
                          : "border-neutral-200 bg-white text-neutral-900 hover:border-primary-200 hover:bg-primary-50/60",
                      )}
                      key={option.value}
                    >
                      <input
                        checked={isSelected}
                        className="sr-only"
                        name={currentQuestion.key}
                        onChange={() => handleAnswer(option.value)}
                        type="radio"
                        value={option.value}
                      />
                      {option.label}
                    </label>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              animate={{ y: 0 }}
              className="space-y-4"
              exit={shouldReduceMotion ? undefined : { y: -8 }}
              initial={shouldReduceMotion ? false : { y: 8 }}
              key="result"
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="rounded-3xl border border-primary-100 bg-primary-50 p-5 md:p-6">
                <div className="space-y-4">
                  <p className="text-sm font-medium text-primary-700">Rekomendasi</p>
                  <h3 className="text-xl font-medium leading-[1.3] tracking-[-0.02em] text-neutral-900 md:text-2xl md:leading-[1.35]">
                    {result.title}
                  </h3>
                  <p className="max-w-2xl text-sm font-normal leading-6 text-neutral-600 md:text-base md:leading-7">
                    {result.description}
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      className={buttonVariants({ radius: "rounded", size: "md" })}
                      href={result.href}
                    >
                      {result.cta}
                    </a>
                    <Button
                      iconLeft={<RotateCcw className="h-4 w-4" />}
                      onClick={reset}
                      radius="rounded"
                      variant="ghost"
                    >
                      Ulangi
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
}
