import type { ReactNode } from "react";

import { cn } from "@/src/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  iconLeft?: ReactNode;
  variant?: "default" | "soft" | "success";
};

const badgeVariants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-neutral-900 text-white",
  soft: "bg-primary-50 text-neutral-900",
  success: "border border-green-100 bg-green-50 text-green-700",
};

export function Badge({ children, className, iconLeft, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium tracking-normal sm:text-sm",
        badgeVariants[variant],
        className,
      )}
    >
      {iconLeft}
      {children}
    </span>
  );
}
