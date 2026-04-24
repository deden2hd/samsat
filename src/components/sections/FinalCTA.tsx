import Link from "next/link";

import { Container } from "@/src/components/ui/Container";
import { buttonVariants } from "@/src/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24" id="final-cta">
      <Container>
        <div className="rounded-[2rem] bg-[linear-gradient(135deg,_#2563EB_0%,_#1D4ED8_55%,_#1E40AF_100%)] p-8 text-white shadow-floating md:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm font-medium text-primary-100">Lanjut ke SIGNAL</p>
              <h2 className="text-3xl font-medium leading-[1.3] tracking-[-0.02em] md:text-4xl md:leading-[1.35]">
                Sudah tahu kondisimu? Lanjutkan lewat SIGNAL.
              </h2>
              <p className="text-base font-normal leading-7 text-primary-100">
                Mulai dari cek status, siapkan dokumen, lalu bayar dengan cara yang paling sesuai.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                className={buttonVariants({
                  className: "w-full sm:w-auto",
                  size: "lg",
                  variant: "white",
                })}
                href="#beranda"
              >
                Download SIGNAL
              </Link>
              <Link
                className={buttonVariants({
                  className: "w-full sm:w-auto border-white/20 bg-white/10 text-white hover:bg-white/20 focus-visible:ring-white/40",
                  size: "lg",
                  variant: "ghost",
                })}
                href="#cek-kondisi"
              >
                Cek kondisi lagi
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
