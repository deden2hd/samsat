import { ArrowUpRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/src/components/ui/Badge";
import { Container } from "@/src/components/ui/Container";
import { HeroVisual } from "@/src/components/ui/HeroVisual";
import { buttonVariants } from "@/src/components/ui/Button";

export function HeroSection() {
  return (
    <section
      className="overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white pb-16 pt-32 md:pb-24 md:pt-36"
      id="beranda"
    >
      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-[820px] space-y-7">
            <Badge
              className="mx-auto w-fit"
              iconLeft={<ShieldCheck className="h-4 w-4 text-primary-600" />}
              variant="soft"
            >
              SAMSAT Digital Nasional
            </Badge>
            <div className="space-y-4">
              <h1 className="mx-auto max-w-[820px] text-4xl font-medium leading-[1.2] tracking-[-0.02em] text-neutral-900 md:text-[64px] md:leading-[1.15]">
                Bayar pajak kendaraan sekarang bisa dari HP.
              </h1>
              <p className="mx-auto max-w-[620px] text-base font-normal leading-7 text-neutral-600 md:text-lg md:leading-8">
                Lewat SIGNAL, kamu bisa memahami status pajak, menyiapkan dokumen, dan lanjut
                bayar tanpa antre.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-white">
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </span>
              </Link>
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
            </div>
          </div>

          <div className="relative mt-14 w-full md:mt-16">
            <div className="absolute inset-x-8 top-6 h-32 rounded-full bg-primary-100/70 blur-3xl md:top-8 md:h-40" />
            <HeroVisual className="relative mx-auto max-w-[980px]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
