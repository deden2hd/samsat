"use client";

import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";

const navigation = [
  { href: "#beranda", label: "Beranda" },
  { href: "#cara-bayar", label: "Cara Bayar" },
  { href: "#cek-kondisi", label: "Cek Kondisi" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [openDownload, setOpenDownload] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setOpenDownload(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-4 z-50 md:top-6">
      <Container>
        <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between gap-4 rounded-full border border-slate-200/60 bg-white px-4 shadow-soft md:px-6">
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

          <div className="relative" ref={dropdownRef}>
            <Button
              className="h-11 gap-2 pl-[18px] pr-2"
              iconBubbleRight
              iconRight={<ArrowDown className="h-4 w-4" />}
              onClick={() => setOpenDownload((current) => !current)}
              radius="pill"
              size="sm"
              variant="primary"
            >
              Download
            </Button>

            {openDownload ? (
              <div className="absolute right-0 top-full mt-3 w-[180px] rounded-2xl border border-slate-200 bg-white p-2 shadow-card">
                <Link
                  className="block rounded-xl px-4 py-3 transition duration-200 hover:bg-slate-50"
                  href="#"
                  onClick={() => setOpenDownload(false)}
                >
                  <p className="text-sm font-medium text-neutral-900">App Store</p>
                  <p className="mt-1 text-xs text-text-muted">Untuk iPhone dan iPad</p>
                </Link>
                <Link
                  className="block rounded-xl px-4 py-3 transition duration-200 hover:bg-slate-50"
                  href="#"
                  onClick={() => setOpenDownload(false)}
                >
                  <p className="text-sm font-medium text-neutral-900">Google Play</p>
                  <p className="mt-1 text-xs text-text-muted">Untuk perangkat Android</p>
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </div>
  );
}
