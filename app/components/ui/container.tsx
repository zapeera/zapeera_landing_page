import { cn } from "@/app/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "none" | "sm" | "md" | "lg";
}

/**
 * Container — centers content with consistent horizontal gutters and a max-width.
 * Default `xl` (max-w-content === 1280px) is the canonical content width across the site.
 */
const Container = ({
  children,
  className,
  size = "xl",
  padding = "md",
}: ContainerProps) => {
  const sizeClasses = {
    sm: "max-w-3xl",   // ~768px  — narrow long-form / legal pages
    md: "max-w-5xl",   // ~1024px — medium content
    lg: "max-w-6xl",   // ~1152px — wide content
    xl: "max-w-content", // 1280px — default, canonical
    full: "max-w-full",
  };

  const paddingClasses = {
    none: "",
    sm: "px-4 sm:px-6",
    md: "px-4 sm:px-6 lg:px-8",
    lg: "px-4 sm:px-6 lg:px-10 xl:px-12",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full",
        sizeClasses[size],
        paddingClasses[padding],
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
