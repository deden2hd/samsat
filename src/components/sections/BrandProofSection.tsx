import { Container } from "@/src/components/ui/Container";

const logos = [
  { src: "/images/mitra1.png", alt: "Mitra 1" },
  { src: "/images/mitra2.png", alt: "Mitra 2" },
  { src: "/images/mitra3.png", alt: "Mitra 3" },
  { src: "/images/mitra4.png", alt: "Mitra 4" },
  { src: "/images/mitra5.png", alt: "Mitra 5" },
];
export function BrandProofSection() {
  return (
    <section className="bg-white py-10 md:py-12">
      <Container>
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(240px,34%)_minmax(0,66%)] lg:gap-10">
          <p className="max-w-[360px] text-sm font-medium leading-6 text-neutral-600 md:text-base md:leading-7">
            Terhubung dengan ekosistem layanan digital kendaraan
          </p>

          <div
            aria-label="Ekosistem layanan kendaraan digital"
            className="group relative overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
              maskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            }}
          >
            <div className="flex w-max animate-marquee items-center gap-10 group-hover:[animation-play-state:paused] md:gap-14">
              {[...logos, ...logos].map((logo, index) => (
                <img
                  src={logo.src}
                  alt={logo.alt}
                  aria-hidden={index >= logos.length}
                  className="shrink-0 h-8 md:h-12 w-auto object-contain transition duration-200 hover:scale-105 opacity-70 hover:opacity-100 grayscale hover:grayscale-0"
                  key={`${logo.alt}-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
