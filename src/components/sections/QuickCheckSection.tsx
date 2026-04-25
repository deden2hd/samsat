import { FileWarning, HelpCircle, Route, Zap } from "lucide-react";

import { DecisionAssistant } from "@/src/components/interaction/DecisionAssistant";
import { Badge } from "@/src/components/ui/Badge";
import { Container } from "@/src/components/ui/Container";

const problemPoints = [
  {
    icon: HelpCircle,
    label: "Tidak tahu mulai dari mana",
  },
  {
    icon: Route,
    label: "Bingung online atau datang",
  },
  {
    icon: FileWarning,
    label: "Takut salah dokumen",
  },
];

export function QuickCheckSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24" id="cek-kondisi">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,40%)_minmax(0,60%)] lg:gap-12">
          <div className="space-y-7">
            <div className="space-y-4">
              <Badge
                className="w-fit"
                iconLeft={<Zap className="h-4 w-4 text-primary-600" />}
                variant="soft"
              >
                Cek Cepat
              </Badge>
              <div className="space-y-4">
                <h2 className="max-w-[460px] text-3xl font-medium leading-[1.35] tracking-[-0.02em] text-neutral-900 md:text-4xl">
                  Masih bingung harus mulai dari mana?
                </h2>
                <p className="max-w-[520px] text-base leading-7 text-neutral-600">
                  Jawab beberapa pertanyaan singkat untuk tahu apakah kamu bisa lanjut online atau
                  perlu datang langsung.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {problemPoints.map(({ icon: Icon, label }) => (
                <div
                  className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3"
                  key={label}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-neutral-900 md:text-base">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <DecisionAssistant />
        </div>
      </Container>
    </section>
  );
}
