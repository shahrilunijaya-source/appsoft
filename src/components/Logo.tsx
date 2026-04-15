import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "text-2xl",
  md: "text-3xl",
  lg: "text-5xl",
};

export default function Logo({ className, size = "md" }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-end font-extrabold tracking-tightest leading-none select-none",
        sizes[size],
        className,
      )}
      aria-label="AppSoft Asia"
    >
      <span style={{ color: "#4ade80" }}>App</span>
      <span style={{ color: "#6b7280" }}>Soft</span>
      <span
        className="ml-1 font-extrabold uppercase"
        style={{
          color: "#9ca3af",
          fontSize: "0.3em",
          letterSpacing: "0.2em",
          lineHeight: 1,
          paddingBottom: "0.25em",
        }}
      >
        Asia
      </span>
    </span>
  );
}
