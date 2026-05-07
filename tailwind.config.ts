import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "-apple-system", "sans-serif"],
        poppins: ["var(--font-poppins)", "system-ui", "-apple-system", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "system-ui", "-apple-system", "sans-serif"],
      },

      // Type scale — semantic names with paired line-height + weight.
      // Use as: text-display, text-h1, text-h2, text-h3, text-h4, text-body-lg, text-body, text-body-sm, text-caption.
      fontSize: {
        display: ["clamp(2.75rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.035em", fontWeight: "700" }],
        h1: ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }],
        h2: ["clamp(1.875rem, 3.25vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
        h3: ["clamp(1.5rem, 2.5vw, 1.875rem)", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "600" }],
        h4: ["1.25rem", { lineHeight: "1.35", letterSpacing: "-0.005em", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        body: ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.55" }],
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.05em" }],
      },

      colors: {
        // Shadcn/Radix bridge tokens (driven by CSS vars in globals.css).
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Primary — deep professional blue. Brand actions, links, headings on light.
        // 600 is the brand base (matches the most-used existing #1947C4).
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#6B82F0",
          500: "#3D5BE0",
          600: "#1947C4",
          700: "#1732BD",
          800: "#0C2C8A",
          900: "#081E5E",
          950: "#040F35",
        },

        // Accent — teal. RESERVED FOR PRIMARY CTA BUTTONS ONLY.
        // Do not use for borders, backgrounds, or decorative purposes.
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          50: "#E9FAF9",
          100: "#CFF5F2",
          200: "#A0EBE7",
          300: "#6FDFDA",
          400: "#29CDCF",
          500: "#26D2C6",
          600: "#1FA8A0",
          700: "#178079",
          800: "#105A55",
          900: "#093834",
        },

        // Surface tones — alternating section backgrounds.
        // `cream` is the warm off-white used to break up white sections without
        // introducing a heavy divider line. Keep these two values close in luminance.
        cream: "#FAF8F4",
        canvas: "#FFFFFF",

        // Neutral gray scale — text, borders, surfaces.
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },

        // Semantic colors.
        success: {
          50: "#ECFDF5",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
        },
        warning: {
          50: "#FFFBEB",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
        },
        error: {
          50: "#FEF2F2",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
        },
        info: {
          50: "#EFF6FF",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
        },

        // Shadcn-compatible bridge tokens.
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },

      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-hero": "var(--gradient-hero)",
      },

      borderRadius: {
        none: "0",
        sm: "0.25rem",   // 4px
        md: "0.5rem",    // 8px
        lg: "0.75rem",   // 12px (matches --radius)
        xl: "1rem",      // 16px
        "2xl": "1.5rem", // 24px
        full: "9999px",
      },

      boxShadow: {
        sm: "0 1px 2px 0 rgb(15 23 42 / 0.04)",
        md: "0 4px 12px -2px rgb(15 23 42 / 0.08), 0 2px 4px -1px rgb(15 23 42 / 0.04)",
        lg: "0 10px 24px -4px rgb(15 23 42 / 0.10), 0 4px 8px -2px rgb(15 23 42 / 0.05)",
        xl: "0 20px 40px -8px rgb(15 23 42 / 0.12), 0 8px 16px -4px rgb(15 23 42 / 0.06)",
        none: "none",
      },

      // Standard section vertical rhythm: py-section-y on every <Section>.
      spacing: {
        "section-y": "clamp(3rem, 6vw, 6rem)", // 48–96px responsive
      },

      maxWidth: {
        content: "80rem", // 1280px — the canonical container
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
