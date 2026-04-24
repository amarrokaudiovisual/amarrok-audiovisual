import { cn } from "@/lib/utils";

export const Logo = ({ className, withTagline = false }: { className?: string; withTagline?: boolean }) => (
  <div className={cn("inline-flex flex-col items-center", className)}>
    <span className="font-display text-gold text-xl md:text-2xl tracking-[0.35em] leading-none lowercase">
      amarrok
    </span>
    {withTagline && (
      <span className="mt-2 text-[0.6rem] md:text-xs text-gold/70 tracking-[0.45em] uppercase">
        Audiovisual Experience
      </span>
    )}
  </div>
);
