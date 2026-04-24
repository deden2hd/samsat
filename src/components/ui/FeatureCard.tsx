import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Card } from "@/src/components/ui/Card";
import { cn } from "@/src/lib/utils";

type FeatureCardProps = {
  description: string;
  icon: LucideIcon;
  image?: ReactNode;
  title: string;
  variant?: "default" | "soft" | "blue";
};

export function FeatureCard({
  description,
  icon: Icon,
  image,
  title,
  variant = "default",
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "h-full p-6 transition duration-200 hover:-translate-y-1",
        variant === "blue" ? "border border-primary-500/30" : "",
      )}
      variant={variant}
    >
      <div className="flex h-full flex-col gap-5">
        <div className="flex items-center justify-between gap-4">
          <span
            className={cn(
              "rounded-2xl p-3",
              variant === "blue" ? "bg-white/15 text-white" : "bg-primary-50 text-primary-700",
            )}
          >
            <Icon className="h-5 w-5" />
          </span>
          {image}
        </div>
        <div className="space-y-3">
          <h3
            className={cn(
              "text-2xl font-medium leading-[1.35] tracking-[-0.02em]",
              variant === "blue" ? "text-white" : "text-text-primary",
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "text-base font-normal leading-7",
              variant === "blue" ? "text-primary-100" : "text-text-secondary",
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}
