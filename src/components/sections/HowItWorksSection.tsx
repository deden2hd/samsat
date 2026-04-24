import { ArrowRightLeft, Files, Smartphone } from "lucide-react";

import { Container } from "@/src/components/ui/Container";
import { Section } from "@/src/components/ui/Section";
import { SectionHeader } from "@/src/components/ui/SectionHeader";
import { StatCard } from "@/src/components/ui/StatCard";

const steps = [
  {
    description: "Ketahui dulu jalur yang paling sesuai sebelum melakukan pembayaran.",
    icon: ArrowRightLeft,
    label: "Cek kondisi kendaraan",
    value: "01",
  },
  {
    description: "Siapkan dokumen inti agar proses terasa lebih singkat dan aman.",
    icon: Files,
    label: "Siapkan dokumen",
    value: "02",
  },
  {
    description: "Kalau sudah siap, lanjutkan pembayaran lewat SIGNAL dari HP.",
    icon: Smartphone,
    label: "Lanjut bayar lewat SIGNAL",
    value: "03",
  },
];

export function HowItWorksSection() {
  return (
    <Section id="cara-bayar">
      <Container>
        <div className="space-y-10">
          <SectionHeader
            description="Alur dibuat singkat agar user bisa bergerak cepat dari bingung ke tindakan."
            eyebrow="Alur Singkat"
            title="Dari bingung jadi selesai dalam 3 langkah"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <StatCard key={step.value} {...step} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
