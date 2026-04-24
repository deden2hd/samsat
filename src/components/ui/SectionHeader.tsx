import { Badge } from "@/src/components/ui/Badge";
import { cn } from "@/src/lib/utils";

type SectionHeaderProps = {
  align?: "left" | "center";
  className?: string;
  description: string;
  eyebrow?: string;
  title: string;
};

export function SectionHeader({
  align = "left",
  className,
  description,
  eyebrow,
  title,
}: SectionHeaderProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={cn("flex flex-col gap-4", alignment, className)}>
      {eyebrow ? <Badge variant="soft">{eyebrow}</Badge> : null}
      <div className="space-y-4">
        <h2 className="text-3xl font-medium leading-[1.3] tracking-[-0.02em] text-text-primary md:text-4xl md:leading-[1.35]">
          {title}
        </h2>
        <p className="max-w-[560px] text-base font-normal leading-7 text-text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}
