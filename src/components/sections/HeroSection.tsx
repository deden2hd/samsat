import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { AppStoreButtons } from "@/src/components/ui/AppStoreButtons";
import { Badge } from "@/src/components/ui/Badge";
import { Container } from "@/src/components/ui/Container";
import { PhoneMockup } from "@/src/components/ui/PhoneMockup";
import { buttonVariants } from "@/src/components/ui/Button";

const trustPills = ["Tanpa antre", "Cek status", "Bayar online"];

export function HeroSection() {
  return (
    <section
      className="overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.14),_transparent_35%),linear-gradient(180deg,_#F8FAFC_0%,_#FFFFFF_100%)] pt-28 pb-16 md:pt-32 md:pb-24"
      id="beranda"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <Badge variant="soft">SAMSAT Digital Nasional</Badge>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-medium leading-[1.2] tracking-[-0.02em] text-text-primary md:text-6xl md:leading-[1.15]">
                Bayar pajak kendaraan sekarang bisa dari HP.
              </h1>
              <p className="max-w-2xl text-base font-normal leading-7 text-text-secondary">
                Lewat SIGNAL, kamu bisa memahami status pajak, menyiapkan dokumen, dan lanjut
                bayar tanpa antre.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                className={buttonVariants({
                  className: "w-full sm:w-auto",
                  size: "lg",
                  variant: "primary",
                })}
                href="#final-cta"
              >
                Download SIGNAL
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                className={buttonVariants({
                  className: "w-full sm:w-auto",
                  size: "lg",
                  variant: "secondary",
                })}
                href="#cek-kondisi"
              >
                Cek dulu kondisi saya
              </Link>
            </div>

            <p className="max-w-xl text-sm font-normal leading-6 text-text-muted">
              Resmi, praktis, dan dirancang untuk memudahkan pembayaran pajak kendaraan.
            </p>

            <AppStoreButtons />

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {[
                {
                  icon: ShieldCheck,
                  text: "Website dirancang untuk bantu user memilih langkah yang paling masuk akal.",
                },
                {
                  icon: CheckCircle2,
                  text: "Fast path untuk langsung download, guided path untuk yang masih bingung.",
                },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-start gap-3 rounded-2xl border border-neutral-200/80 bg-white/70 px-4 py-3 shadow-soft"
                >
                  <span className="rounded-full bg-primary-50 p-2 text-primary-700">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-normal leading-6 text-text-secondary">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-8 top-8 h-64 rounded-full bg-primary-200/40 blur-3xl" />
            <PhoneMockup />
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              <div className="absolute -left-4 top-24 rounded-full border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-text-primary shadow-soft">
                Tanpa antre
              </div>
              <div className="absolute -right-3 top-12 rounded-full border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-text-primary shadow-soft">
                Cek status
              </div>
              <div className="absolute -right-6 bottom-20 rounded-full border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-text-primary shadow-soft">
                Bayar online
              </div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:hidden">
              {trustPills.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-text-primary shadow-soft"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
