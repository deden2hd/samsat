"use client";

import { ArrowDown, ChevronDown, Globe2, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Button, buttonVariants } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";

const navigation = [
  { href: "#cek-kondisi", label: "Cek Kondisi" },
  { href: "#cara-bayar", label: "Cara Bayar" },
  { href: "#dokumen", label: "Dokumen" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [openDownload, setOpenDownload] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setOpenDownload(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textColor = isScrolled ? "text-neutral-900" : "text-white";
  const mutedTextColor = isScrolled ? "text-neutral-500" : "text-white/70";
  const navLinkClass = isScrolled
    ? "text-neutral-600 hover:bg-slate-100 hover:text-neutral-900"
    : "text-white/85 hover:bg-white/10 hover:text-white";
  const languageClass = isScrolled
    ? "border-slate-200/80 text-neutral-700 hover:bg-slate-50"
    : "border-white/20 text-white hover:bg-white/10";
  const mobileButtonClass = isScrolled
    ? "border-slate-200/80 text-neutral-900 hover:bg-slate-50"
    : "border-white/20 text-white hover:bg-white/10";

  const hoverLift = shouldReduceMotion ? undefined : { y: -1 };
  const tapPress = shouldReduceMotion ? undefined : { scale: 0.98 };
  const spring = { damping: 22, stiffness: 360, type: "spring" as const };

  return (
    <motion.header
      animate={shouldReduceMotion ? undefined : { y: 0 }}
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-slate-200/70 bg-white shadow-soft"
          : "bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0)_100%)]",
      ].join(" ")}
      initial={shouldReduceMotion ? undefined : { y: -10 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container className="max-w-[1240px] px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 md:h-20 md:gap-6">
          <div className="flex min-w-0 items-center gap-8 lg:gap-10">
            <Link className="group flex shrink-0 items-center gap-3" href="#beranda">
              <span
                className={[
                  "flex h-9 w-9 items-center justify-center rounded-2xl text-sm font-semibold shadow-soft transition-all duration-300 md:h-10 md:w-10",
                  isScrolled
                    ? "bg-neutral-900 text-white"
                    : "bg-white/15 text-white ring-1 ring-white/20",
                ].join(" ")}
              >
                <motion.span transition={spring} whileHover={hoverLift} whileTap={tapPress}>
                  S
                </motion.span>
              </span>
              <span className="flex flex-col leading-none">
                <span
                  className={[
                    "text-base font-semibold tracking-[-0.02em] transition-colors duration-300",
                    textColor,
                  ].join(" ")}
                >
                  SIGNAL
                </span>
                <span
                  className={[
                    "mt-1 hidden text-xs font-medium transition-colors duration-300 sm:block",
                    mutedTextColor,
                  ].join(" ")}
                >
                  SAMSAT Digital
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  className={[
                    "rounded-2xl px-4 py-2 text-sm font-medium transition duration-200",
                    navLinkClass,
                  ].join(" ")}
                  href={item.href}
                >
                  <motion.span
                    className="block"
                    transition={spring}
                    whileHover={hoverLift}
                    whileTap={tapPress}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <motion.button
              className={[
                "hidden h-11 items-center gap-2 rounded-2xl border px-3 text-sm font-medium transition duration-200 md:flex",
                languageClass,
              ].join(" ")}
              transition={spring}
              type="button"
              whileHover={hoverLift}
              whileTap={tapPress}
            >
              <Globe2 className="h-4 w-4" />
              <span>ID</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </motion.button>

            <div className="relative hidden md:block" ref={dropdownRef}>
              <motion.div
                transition={spring}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
                whileTap={tapPress}
              >
                <Button
                  className="h-10 gap-2 pl-4 pr-2 md:h-11 md:gap-3 md:pl-5 md:pr-2.5"
                  iconBubbleRight
                  iconRight={<ArrowDown className="h-4 w-4" />}
                  onClick={() => {
                    setOpenDownload((current) => !current);
                  }}
                  radius="pill"
                  size="sm"
                  variant="primary"
                >
                  <span className="md:hidden">Download</span>
                  <span className="hidden md:inline">Download SIGNAL</span>
                </Button>
              </motion.div>

              <AnimatePresence>
                {openDownload ? (
                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: 1, scale: 1, y: 0 }
                    }
                    className="absolute right-0 top-full mt-3 w-[190px] origin-top-right rounded-2xl border border-slate-200 bg-white p-2 shadow-card"
                    exit={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: 0, scale: 0.98, y: -6 }
                    }
                    initial={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: 0, scale: 0.98, y: -6 }
                    }
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  >
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
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <details className="group relative md:hidden">
              <summary
                aria-label="Buka menu navigasi"
                className={[
                  "flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-2xl border transition duration-200 [&::-webkit-details-marker]:hidden",
                  mobileButtonClass,
                ].join(" ")}
              >
                <Menu className="h-5 w-5 group-open:hidden" />
                <X className="hidden h-5 w-5 group-open:block" />
              </summary>

              <div className="absolute right-0 top-full mt-3 w-[min(calc(100vw-2rem),360px)] rounded-[22px] border border-slate-200/80 bg-white p-2 text-neutral-900 shadow-card">
                {navigation.map((item) => (
                  <Link
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-neutral-700 transition duration-200 hover:bg-slate-50 hover:text-neutral-900"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-2 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-neutral-700">
                  <span className="flex items-center gap-2">
                    <Globe2 className="h-4 w-4" />
                    Bahasa
                  </span>
                  <span className="flex items-center gap-1">
                    ID
                    <ChevronDown className="h-3.5 w-3.5" />
                  </span>
                </div>

                <div className="mt-2 rounded-2xl bg-primary-50 p-2">
                  <Link
                    className={buttonVariants({
                      className: "h-12 w-full justify-between gap-3 pl-5 pr-2",
                      radius: "pill",
                      size: "md",
                      variant: "primary",
                    })}
                    href="#"
                  >
                    <span>Download SIGNAL</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-900">
                      <ArrowDown className="h-4 w-4" />
                    </span>
                  </Link>

                  <div className="mt-2 grid gap-1">
                    <Link
                      className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 transition duration-200 hover:bg-white"
                      href="#"
                    >
                      App Store
                    </Link>
                    <Link
                      className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 transition duration-200 hover:bg-white"
                      href="#"
                    >
                      Google Play
                    </Link>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </Container>
    </motion.header>
  );
}
