import Link from "next/link";

import { Container } from "@/src/components/ui/Container";
import { buttonVariants } from "@/src/components/ui/Button";

const navigation = [
  { href: "#beranda", label: "Beranda" },
  { href: "#cara-bayar", label: "Cara Bayar" },
  { href: "#cek-kondisi", label: "Cek Kondisi" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  return (
    <div className="fixed inset-x-0 top-4 z-50">
      <Container>
        <div className="pointer-events-auto rounded-full border border-slate-200/70 bg-white/80 px-4 py-3 shadow-soft backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <Link className="text-lg font-medium tracking-[-0.02em] text-text-primary" href="#beranda">
              SIGNAL
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  className="text-sm font-medium text-text-secondary transition duration-200 hover:text-primary-700"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link className={buttonVariants({ size: "sm", variant: "primary" })} href="#final-cta">
              Download
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
