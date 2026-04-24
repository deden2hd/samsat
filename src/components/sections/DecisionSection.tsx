import { DecisionAssistant } from "@/src/components/interaction/DecisionAssistant";
import { Container } from "@/src/components/ui/Container";
import { Section } from "@/src/components/ui/Section";
import { SectionHeader } from "@/src/components/ui/SectionHeader";

export function DecisionSection() {
  return (
    <Section id="cek-kondisi">
      <Container>
        <div className="space-y-10">
          <SectionHeader
            description="Jawab 3 pertanyaan singkat untuk tahu langkah paling masuk akal sebelum lanjut ke SIGNAL."
            eyebrow="Decision Assistant"
            title="Cek kondisi kamu dalam beberapa detik"
          />
          <DecisionAssistant />
        </div>
      </Container>
    </Section>
  );
}
