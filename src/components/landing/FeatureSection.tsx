import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface FeatureSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  visual: ReactNode;
  /** Render the visual on the left instead of the right */
  reversed?: boolean;
}

export function FeatureSection({
  eyebrow,
  title,
  description,
  visual,
  reversed = false,
}: FeatureSectionProps) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div className={cn(reversed && "lg:order-2")}>
        <Badge
          variant="secondary"
          className="mb-4 rounded-full bg-sky-100 px-3 py-1 text-sky-700 hover:bg-sky-100"
        >
          {eyebrow}
        </Badge>
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-slate-500">
          {description}
        </p>
      </div>

      <div className={cn("relative", reversed && "lg:order-1")}>{visual}</div>
    </div>
  );
}
