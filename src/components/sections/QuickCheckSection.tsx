"use client";

import { Zap } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { DecisionAssistant } from "@/src/components/interaction/DecisionAssistant";
import { Badge } from "@/src/components/ui/Badge";
import { Container } from "@/src/components/ui/Container";

export function QuickCheckSection() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? { y: 0 }
    : {
        y: 16,
      };

  return (
    <section className="bg-white pb-14 pt-6 md:pb-24 md:pt-10" id="cek-kondisi">
      <Container>
        <motion.div
          className="space-y-8 md:space-y-10"
          initial="hidden"
          transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.08 }}
          viewport={{ amount: 0.3, once: true }}
          whileInView="visible"
        >
          <motion.div
            className="grid gap-6 lg:grid-cols-[minmax(0,54%)_minmax(320px,38%)] lg:items-end lg:justify-between"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            variants={{
              hidden: reveal,
              visible: { y: 0 },
            }}
          >
            <motion.div
              className="space-y-4"
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              variants={{
                hidden: reveal,
                visible: { y: 0 },
              }}
            >
              <Badge
                className="w-fit"
                iconLeft={<Zap className="h-4 w-4 text-primary-600" />}
                variant="soft"
              >
                Cek Cepat
              </Badge>
              <h2 className="max-w-[460px] text-3xl font-medium leading-[1.35] tracking-[-0.02em] text-neutral-900 md:text-4xl">
                Masih bingung harus mulai dari mana?
              </h2>
            </motion.div>

            <motion.p
              className="max-w-[430px] text-base leading-7 text-neutral-600 lg:ml-auto"
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              variants={{
                hidden: reveal,
                visible: { y: 0 },
              }}
            >
              Jawab beberapa pertanyaan singkat untuk tahu apakah kamu bisa lanjut online
              atau perlu datang langsung.
            </motion.p>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-[22px] bg-slate-100 p-3 shadow-soft md:rounded-[28px] md:p-8 lg:p-10"
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            variants={{
              hidden: shouldReduceMotion ? { scale: 1, y: 0 } : { scale: 0.99, y: 18 },
              visible: { scale: 1, y: 0 },
            }}
          >
            <motion.div
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-70 md:opacity-85"
              initial={shouldReduceMotion ? undefined : { scale: 1.04 }}
              style={{
                backgroundImage: "url('/images/quick-section.png')",
              }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ amount: 0.45, once: true }}
              whileInView={shouldReduceMotion ? undefined : { scale: 1 }}
            />

            <motion.div
              className="pointer-events-auto relative z-10 mx-auto w-full max-w-[1040px]"
              transition={{
                delay: shouldReduceMotion ? 0 : 0.08,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              variants={{
                hidden: shouldReduceMotion ? { y: 0 } : { y: 14 },
                visible: { y: 0 },
              }}
            >
              <DecisionAssistant />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
