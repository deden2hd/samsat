import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/src/lib/utils";

type ButtonVariant = "primary" | "dark" | "secondary" | "ghost" | "white";
type ButtonSize = "sm" | "md" | "lg";
type ButtonRadius = "pill" | "rounded";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  iconBubbleRight?: boolean;
  iconBubbleRightClassName?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  radius?: ButtonRadius;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white shadow-floating hover:bg-primary-700 focus-visible:ring-primary-300",
  dark: "bg-neutral-900 text-white shadow-soft hover:bg-neutral-800 focus-visible:ring-neutral-300",
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

const radiusClasses: Record<ButtonRadius, string> = {
  pill: "rounded-full",
  rounded: "rounded-[18px]",
};

export function buttonVariants({
  className,
  radius = "pill",
  size = "md",
  variant = "primary",
}: {
  className?: string;
  radius?: ButtonRadius;
  size?: ButtonSize;
  variant?: ButtonVariant;
}) {
  return cn(
    "inline-flex items-center justify-center gap-2 font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-page disabled:pointer-events-none disabled:opacity-60",
    variantClasses[variant],
    radiusClasses[radius],
    sizeClasses[size],
    className,
  );
}

export function Button({
  children,
  className,
  iconBubbleRight = false,
  iconBubbleRightClassName,
  iconLeft,
  iconRight,
  radius = "pill",
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ className, radius, size, variant })} type={type} {...props}>
      {iconLeft}
      <span>{children}</span>
      {iconRight ? (
        iconBubbleRight ? (
          <span
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-900",
              iconBubbleRightClassName,
            )}
          >
            {iconRight}
          </span>
        ) : (
          iconRight
        )
      ) : null}
    </button>
  );
}
