import { cn } from "@/lib/utils";
import logo from "@/assets/amarrok-logo.png";

export const Logo = ({
  className,
  withTagline = false,
  size = "sm",
}: {
  className?: string;
  withTagline?: boolean;
  size?: "sm" | "md" | "lg";
}) => {
  const heights = {
    sm: "h-8 md:h-9",
    md: "h-12 md:h-14",
    lg: "h-16 md:h-20",
  } as const;
  return (
    <div className={cn("inline-flex flex-col items-center", className)}>
      <img
        src={logo}
        alt="Amarrok Audiovisual Experience"
        className={cn(withTagline ? heights.lg : heights[size], "w-auto object-contain select-none")}
        draggable={false}
      />
    </div>
  );
};
