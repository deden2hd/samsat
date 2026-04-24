import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/src/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: "default" | "soft" | "blue";
};

const cardVariants: Record<NonNullable<CardProps["variant"]>, string> = {
  default: "rounded-3xl border border-neutral-200/80 bg-white shadow-soft",
  soft: "rounded-3xl border border-neutral-200 bg-neutral-50",
  blue: "rounded-3xl bg-primary-600 text-white shadow-floating",
};

export function Card({ children, className, variant = "default", ...props }: CardProps) {
  return (
    <div className={cn(cardVariants[variant], className)} {...props}>
      {children}
    </div>
  );
}
