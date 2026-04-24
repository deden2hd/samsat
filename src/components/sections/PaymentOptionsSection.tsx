import { Building2, MapPinned, Smartphone } from "lucide-react";

import { Container } from "@/src/components/ui/Container";
import { FeatureCard } from "@/src/components/ui/FeatureCard";
import { Section } from "@/src/components/ui/Section";
import { SectionHeader } from "@/src/components/ui/SectionHeader";

const options = [
  {
    description: "Pilihan paling cepat untuk user yang ingin lanjut dari HP dengan alur yang lebih praktis.",
    icon: Smartphone,
    title: "Online lewat SIGNAL",
    variant: "blue" as const,
  },
  {
    description: "Cocok untuk kondisi yang memang perlu pengecekan langsung dan bantuan petugas.",
    icon: Building2,
    title: "Datang ke SAMSAT",
    variant: "default" as const,
  },
  {
    description: "Alternatif layanan bagi user yang ingin opsi lebih dekat tanpa harus ke kantor utama.",
    icon: MapPinned,
    title: "SAMSAT keliling",
    variant: "default" as const,
  },
];

export function PaymentOptionsSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-10">
          <SectionHeader
            description="Tidak semua user butuh jalur yang sama, jadi pilihan dibuat tetap jelas dan ringkas."
            eyebrow="Pilihan Bayar"
            title="Pilih cara yang paling sesuai"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {options.map((option) => (
              <FeatureCard key={option.title} {...option} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
