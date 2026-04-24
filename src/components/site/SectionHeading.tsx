import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading = ({ eyebrow, title, description, align = "center", className }: Props) => (
  <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left", className)}>
    {eyebrow && (
      <p className="text-gold text-[0.65rem] tracking-[0.5em] uppercase mb-5 font-heading">
        — {eyebrow} —
      </p>
    )}
    <h2 className="heading-display text-foreground text-3xl md:text-4xl lg:text-5xl leading-tight">
      {title}
    </h2>
    <div className={cn("mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent", align === "center" && "mx-auto")} />
    {description && (
      <p className="mt-8 text-muted-foreground text-base md:text-lg leading-relaxed font-body">
        {description}
      </p>
    )}
  </div>
);
