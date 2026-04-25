import { FileCheck, Route, ShieldCheck, Smartphone } from "lucide-react";

import { Container } from "@/src/components/ui/Container";
import { SectionHeader } from "@/src/components/ui/SectionHeader";

const cards = [
  {
    description:
      "User diarahkan untuk memahami kondisi kendaraan sebelum lanjut ke proses pembayaran.",
    icon: ShieldCheck,
    title: "Lebih aman karena jalurnya jelas",
  },
  {
    description:
      "Informasi dan aksi utama dibuat singkat agar mudah dipahami tanpa harus membaca terlalu panjang.",
    icon: Smartphone,
    title: "Dirancang untuk akses dari HP",
  },
  {
    description:
      "User bisa melihat dokumen penting lebih awal agar proses tidak berhenti di tengah jalan.",
    icon: FileCheck,
    title: "Dokumen lebih siap",
  },
  {
    description:
      "Website membantu user memilih apakah bisa lanjut online atau perlu datang langsung.",
    icon: Route,
    title: "Tahu langkah berikutnya",
  },
];

const flowItems = ["Cek kondisi", "Siapkan dokumen", "Lanjut ke SIGNAL"];

export function TrustValidationSection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <div className="space-y-10 md:space-y-12">
          <SectionHeader
            align="center"
            className="mx-auto max-w-[760px]"
            description="SIGNAL membantu kamu memahami status, menyiapkan dokumen, dan melanjutkan pembayaran dengan langkah yang lebih jelas."
            eyebrow="Kenapa SIGNAL"
            title="Satu jalur digital untuk urusan pajak kendaraan"
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {cards.map(({ description, icon: Icon, title }) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium leading-7 tracking-[-0.02em] text-neutral-900">
                    {title}
                  </h3>
                  <p className="text-base leading-7 text-neutral-600">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-primary-100 bg-primary-50 p-4 md:p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              {flowItems.map((item, index) => (
                <div key={item} className="flex items-center gap-4 md:flex-1">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-medium text-white">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium text-neutral-900 md:text-base">{item}</span>
                  {index < flowItems.length - 1 ? (
                    <div className="hidden h-px flex-1 bg-primary-200 md:block" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
