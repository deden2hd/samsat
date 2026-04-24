import Link from "next/link";

import { Container } from "@/src/components/ui/Container";

const navigation = [
  { href: "#beranda", label: "Beranda" },
  { href: "#cara-bayar", label: "Cara Bayar" },
  { href: "#cek-kondisi", label: "Cek Kondisi" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="bg-neutral-900 py-12 text-white">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <h2 className="text-xl font-medium tracking-[-0.02em]">SIGNAL / SAMSAT Digital</h2>
            <p className="max-w-lg text-sm font-normal leading-6 text-neutral-300">
              Website ini adalah konsep desain ulang pengalaman pengguna untuk kebutuhan
              portfolio.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                className="text-sm font-medium text-neutral-200 transition duration-200 hover:text-white"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
