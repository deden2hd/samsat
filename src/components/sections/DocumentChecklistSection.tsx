import { BadgeCheck, CreditCard, FileDigit, IdCard } from "lucide-react";

import { Container } from "@/src/components/ui/Container";
import { FeatureCard } from "@/src/components/ui/FeatureCard";
import { Section } from "@/src/components/ui/Section";
import { SectionHeader } from "@/src/components/ui/SectionHeader";

const documents = [
  {
    description: "Cek dokumen utama kendaraan sebelum mulai proses pembayaran.",
    icon: BadgeCheck,
    title: "STNK",
  },
  {
    description: "Gunakan identitas yang sesuai dengan data kendaraan agar proses lebih aman.",
    icon: IdCard,
    title: "KTP sesuai data kendaraan",
  },
  {
    description: "Siapkan nomor polisi untuk mempercepat pengecekan data kendaraan.",
    icon: FileDigit,
    title: "Nomor polisi",
  },
  {
    description: "Pastikan data kendaraan yang kamu pakai sudah sesuai sebelum lanjut.",
    icon: CreditCard,
    title: "Data kendaraan",
  },
];

export function DocumentChecklistSection() {
  return (
    <Section className="bg-white" id="dokumen">
      <Container>
        <div className="space-y-10">
          <SectionHeader
            description="Checklist singkat ini membantu user menyiapkan hal penting sebelum masuk ke SIGNAL."
            eyebrow="Checklist Dokumen"
            title="Siapkan dokumen sebelum mulai"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {documents.map((document) => (
              <FeatureCard key={document.title} {...document} variant="soft" />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
