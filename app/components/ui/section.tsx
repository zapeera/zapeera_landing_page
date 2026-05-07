import * as React from "react";
import { cn } from "@/app/lib/utils";
import Container from "./container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Background tone. Default `default` (white). */
  tone?: "default" | "muted" | "primary" | "subtle";
  /** Vertical padding. Default `md`. */
  spacing?: "sm" | "md" | "lg";
  /** When true, renders without an inner Container so callers can lay out edge-to-edge content. */
  bare?: boolean;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  children: React.ReactNode;
}

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-background",
  muted: "bg-neutral-50",
  subtle: "bg-primary-50",
  primary: "bg-primary-800 text-white",
};

const spacingClasses: Record<NonNullable<SectionProps["spacing"]>, string> = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
};

/**
 * Section — the canonical full-width page section.
 * Provides consistent vertical rhythm + tone, and wraps children in a Container by default.
 */
const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, tone = "default", spacing = "md", bare = false, containerSize = "xl", children, ...props }, ref) => {
    const inner = bare ? children : <Container size={containerSize}>{children}</Container>;
    return (
      <section ref={ref} className={cn(toneClasses[tone], spacingClasses[spacing], className)} {...props}>
        {inner}
      </section>
    );
  },
);
Section.displayName = "Section";

export { Section };
export default Section;
