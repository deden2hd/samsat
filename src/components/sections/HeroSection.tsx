"use client";

import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

import { Badge } from "@/src/components/ui/Badge";
import { Container } from "@/src/components/ui/Container";
import { buttonVariants } from "@/src/components/ui/Button";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: shouldReduceMotion ? { y: 0 } : { y: 18 },
    visible: { y: 0 },
  };
  const spring = { damping: 22, stiffness: 360, type: "spring" as const };

  return (
    <section
      className="relative min-h-[680px] overflow-hidden bg-white pb-12 pt-28 md:min-h-[840px] md:pb-24 md:pt-36"
      id="beranda"
    >
      <motion.div
        animate={shouldReduceMotion ? undefined : { scale: 1 }}
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        initial={shouldReduceMotion ? undefined : { scale: 1.04 }}
        style={{
          backgroundImage: "url('/images/hero-section.png')",
        }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[24%] bg-gradient-to-t from-white to-transparent" />

      <Container>
        <motion.div
          className="relative flex flex-col items-center text-center"
          animate="visible"
          initial="hidden"
          transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.1 }}
        >
          <div className="w-full max-w-[820px] space-y-6 md:space-y-7">
            <motion.div
              variants={reveal}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge
                className="mx-auto w-fit"
                iconLeft={<ShieldCheck className="h-4 w-4 text-primary-600" />}
                variant="soft"
              >
                SAMSAT Digital Nasional
              </Badge>
            </motion.div>
            <div className="space-y-4">
              <motion.h1
                className="mx-auto max-w-[820px] text-4xl font-medium leading-[1.2] tracking-[-0.02em] text-neutral-900 md:text-[64px] md:leading-[1.15]"
                variants={reveal}
                transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              >
                Bayar Pajak Kendaraan Sekarang Bisa Dari HP.
              </motion.h1>
              <motion.p
                className="mx-auto max-w-[620px] text-base font-normal leading-7 text-neutral-600 md:text-lg md:leading-8"
                variants={reveal}
                transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              >
                Lewat SIGNAL, kamu bisa memahami status pajak, menyiapkan dokumen, dan lanjut
                bayar tanpa antre.
              </motion.p>
            </div>

            <motion.div
              className="mt-7 flex flex-wrap items-center justify-center gap-3 md:mt-8"
              variants={reveal}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="w-full sm:w-auto"
                transition={spring}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
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
                  Cek dulu kondisi saya
                </Link>
              </motion.div>
              <motion.div
                className="w-full sm:w-auto"
                transition={spring}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                <Link
                  className={buttonVariants({
                    className: "h-14 w-full gap-3 px-6 sm:w-auto",
                    radius: "rounded",
                    size: "lg",
                    variant: "dark",
                  })}
                  href="#final-cta"
                >
                  <span>Download SIGNAL</span>
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

        </motion.div>
      </Container>
    </section>
  );
}
