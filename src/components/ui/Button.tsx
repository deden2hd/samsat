import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/src/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "white";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white shadow-floating hover:bg-primary-700 focus-visible:ring-primary-300",
  secondary:
    "border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50 focus-visible:ring-neutral-300",
  ghost: "bg-transparent text-neutral-700 hover:bg-neutral-100 focus-visible:ring-neutral-300",
  white: "bg-white text-primary-700 hover:bg-primary-50 focus-visible:ring-primary-200",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-11 px-4 text-sm",
  md: "h-12 px-5 text-sm md:text-base",
  lg: "h-14 px-6 text-base",
};

export function buttonVariants({
  className,
  size = "md",
  variant = "primary",
}: {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-page disabled:pointer-events-none disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

export function Button({
  children,
  className,
  iconLeft,
  iconRight,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ className, size, variant })} type={type} {...props}>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </button>
  );
}
