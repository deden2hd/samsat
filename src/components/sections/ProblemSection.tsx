import { CircleHelp, FileWarning, Landmark, WalletCards } from "lucide-react";

import { Container } from "@/src/components/ui/Container";
import { FeatureCard } from "@/src/components/ui/FeatureCard";
import { Section } from "@/src/components/ui/Section";
import { SectionHeader } from "@/src/components/ui/SectionHeader";

const problems = [
  {
    description: "Banyak user butuh arahan singkat sebelum benar-benar lanjut ke proses bayar.",
    icon: CircleHelp,
    title: "Tidak tahu harus mulai dari mana",
  },
  {
    description: "User sering butuh gambaran lebih dulu sebelum memutuskan lanjut online atau offline.",
    icon: WalletCards,
    title: "Bingung estimasi biaya",
  },
  {
    description: "Dokumen yang terasa sepele justru sering bikin proses berhenti di tengah jalan.",
    icon: FileWarning,
    title: "Takut salah dokumen",
  },
  {
    description: "Tidak semua kondisi kendaraan terasa jelas, jadi user butuh jalur keputusan yang cepat.",
    icon: Landmark,
    title: "Tidak tahu bisa online atau harus datang",
  },
];

export function ProblemSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-10">
          <SectionHeader
            description="Website ini membantu user mengurangi kebingungan sebelum masuk ke proses pembayaran."
            eyebrow="Masalah Umum"
            title="Yang biasanya bikin bayar pajak terasa ribet"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {problems.map((problem) => (
              <FeatureCard key={problem.title} {...problem} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
