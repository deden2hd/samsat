import { Container } from "@/src/components/ui/Container";

const logos = ["SIGNAL", "SAMSAT", "E-SAMSAT", "BAPENDA", "POLRI", "JASA RAHARJA", "BANK DAERAH"];

export function BrandProofSection() {
  return (
    <section className="border-y border-slate-200/60 bg-white py-10 md:py-12">
      <Container>
        <p className="mb-6 text-center text-sm font-medium text-neutral-500 md:text-base">
          Terhubung dengan ekosistem layanan digital kendaraan
        </p>

        <div
          aria-label="Ekosistem layanan kendaraan digital"
          className="group relative overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee items-center gap-10 group-hover:[animation-play-state:paused] md:gap-14">
            {[...logos, ...logos].map((logo, index) => (
              <span
                aria-hidden={index >= logos.length}
                className="shrink-0 text-sm font-semibold uppercase tracking-[0.08em] text-neutral-400 opacity-70 transition duration-200 hover:text-neutral-700 md:text-base"
                key={`${logo}-${index}`}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
