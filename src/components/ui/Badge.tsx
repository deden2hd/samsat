import type { ReactNode } from "react";

import { cn } from "@/src/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "soft" | "success";
};

const badgeVariants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-neutral-900 text-white",
  soft: "border border-primary-100 bg-primary-50 text-primary-700",
  success: "border border-green-100 bg-green-50 text-green-700",
};

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-normal",
        badgeVariants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
