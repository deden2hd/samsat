import { ArrowUpRight, Building2, Smartphone } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { Section } from "@/src/components/ui/Section";

const paymentRoutes = [
  {
    badge: "Direkomendasikan",
    cta: "Download SIGNAL",
    description: "Untuk kondisi yang bisa diproses digital, lanjutkan dari HP tanpa antre.",
    href: "#final-cta",
    icon: Smartphone,
    image: "/images/quick-section.png",
    title: "Online lewat SIGNAL",
    variant: "primary" as const,
  },
  {
    badge: "Jika perlu cek langsung",
    cta: "Lihat dokumen",
    description:
      "Untuk kondisi yang perlu pengecekan petugas, siapkan dokumen lalu datang ke SAMSAT.",
    href: "#dokumen",
    icon: Building2,
    image: "/images/alur-singkat.png",
    title: "Datang ke SAMSAT",
    variant: "secondary" as const,
  },
];

export function PaymentOptionsSection() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="space-y-8 md:space-y-10">
          <h2 className="max-w-[680px] text-3xl font-medium leading-[1.3] tracking-[-0.02em] text-neutral-900 md:text-4xl md:leading-[1.35]">
            Pilih jalur bayar yang paling sesuai
          </h2>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
            {paymentRoutes.map(
              ({ badge, cta, description, href, icon: Icon, image, title, variant }) => (
                <article
                  className="group relative min-h-[340px] overflow-hidden rounded-[24px] bg-neutral-900 p-5 text-white shadow-card md:min-h-[500px] md:rounded-[30px] md:p-8"
                  key={title}
                >
                  <div
                    className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-80 transition duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${image}')` }}
                  />
                  <div
                    className={
                      variant === "primary"
                        ? "pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/30 to-white/10"
                        : "pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/35 to-white/10"
                    }
                  />

                  <div className="relative flex h-full min-h-[300px] flex-col justify-between md:min-h-[436px]">
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full bg-white/14 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20 backdrop-blur-sm">
                        {badge}
                      </span>
                      <Icon className="h-5 w-5 text-white/85" />
                    </div>

                    <div className="max-w-[520px] space-y-4">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-medium leading-[1.15] tracking-[-0.02em] md:text-4xl">
                          {title}
                        </h3>
                        <p className="max-w-md text-base leading-7 text-white/80">{description}</p>
                      </div>

                      <Link
                        className={buttonVariants({
                          className:
                            variant === "primary"
                              ? "h-12 gap-3 bg-white px-5 text-neutral-900 hover:bg-white/90"
                              : "h-12 gap-3 border-white/25 bg-white/10 px-5 text-white hover:bg-white/20",
                          radius: "rounded",
                          size: "md",
                          variant: variant === "primary" ? "white" : "ghost",
                        })}
                        href={href}
                      >
                        <span>{cta}</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
