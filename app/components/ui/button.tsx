import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/app/lib/utils";

/**
 * Zapeera Button — two variants only.
 *
 *  - primary:   filled accent (teal). Used for the single most important CTA on a screen.
 *  - secondary: outlined primary blue. Used for everything else.
 *
 * Sizes: sm, md (default), lg.
 *
 * Legacy variant aliases (default, outline, ghost, link, destructive) and the legacy size
 * "default" are mapped onto the two-variant system to avoid breaking existing call sites
 * during the migration. New code MUST use "primary" or "secondary".
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold",
    "ring-offset-background transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-accent-500 text-neutral-900 hover:bg-accent-600 hover:text-white active:bg-accent-700 shadow-sm",
        secondary:
          "border border-primary-600 bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100",

        // ----- legacy aliases (kept for in-flight migrations) -----
        default: "bg-accent-500 text-neutral-900 hover:bg-accent-600 hover:text-white shadow-sm",
        outline: "border border-primary-600 bg-transparent text-primary-600 hover:bg-primary-50",
        ghost: "text-primary-600 hover:bg-primary-50",
        link: "text-primary-600 underline-offset-4 hover:underline",
        destructive: "bg-error-600 text-white hover:bg-error-700",
      },
      size: {
        sm: "h-9 px-3 text-body-sm",
        md: "h-11 px-5 text-body",
        lg: "h-12 px-7 text-body-lg",
        icon: "h-10 w-10",
        default: "h-11 px-5 text-body", // legacy alias === md
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
