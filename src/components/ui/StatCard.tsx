import type { LucideIcon } from "lucide-react";

import { Card } from "@/src/components/ui/Card";

type StatCardProps = {
  description?: string;
  icon?: LucideIcon;
  label: string;
  value: string;
};

export function StatCard({ description, icon: Icon, label, value }: StatCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-3xl font-medium leading-[1.25] tracking-[-0.02em] text-text-primary">
            {value}
          </p>
          <p className="text-base font-medium text-text-primary">{label}</p>
          {description ? (
            <p className="text-sm font-normal leading-6 text-text-muted">{description}</p>
          ) : null}
        </div>
        {Icon ? (
          <span className="rounded-2xl bg-primary-50 p-3 text-primary-700">
            <Icon className="h-5 w-5" />
          </span>
        ) : null}
      </div>
    </Card>
  );
}
