import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1320px" },
    },
    extend: {
      fontFamily: {
        display: ['Syncopate', 'Space Grotesk', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
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
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          foreground: "hsl(var(--gold-foreground))",
        },
        red: {
          DEFAULT: "hsl(var(--red))",
          glow: "hsl(var(--red-glow))",
        },
        surface: {
          1: "hsl(var(--surface-1))",
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
        'gradient-fog': 'var(--gradient-fog)',
        'gradient-laser': 'var(--gradient-laser)',
        'gradient-card': 'var(--gradient-card)',
      },
      boxShadow: {
        laser: 'var(--shadow-laser)',
        gold: 'var(--shadow-gold)',
        elevated: 'var(--shadow-elevated)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "fade-in-up": { "0%": { opacity: "0", transform: "translateY(40px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "scale-in": { "0%": { opacity: "0", transform: "scale(0.96)" }, "100%": { opacity: "1", transform: "scale(1)" } },
        "laser-pulse": {
          "0%, 100%": { opacity: "0.6", boxShadow: "0 0 10px hsl(var(--red) / 0.6), 0 0 24px hsl(var(--red-glow) / 0.4)" },
          "50%": { opacity: "1", boxShadow: "0 0 18px hsl(var(--red) / 0.95), 0 0 40px hsl(var(--red-glow) / 0.7)" },
        },
        "fog-drift": {
          "0%": { transform: "translate3d(-2%, 0, 0) scale(1.05)", opacity: "0.4" },
          "50%": { transform: "translate3d(2%, -1%, 0) scale(1.08)", opacity: "0.55" },
          "100%": { transform: "translate3d(-2%, 0, 0) scale(1.05)", opacity: "0.4" },
        },
        "shimmer": { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in-up": "fade-in-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "scale-in": "scale-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "laser-pulse": "laser-pulse 3.5s ease-in-out infinite",
        "fog-drift": "fog-drift 18s ease-in-out infinite",
        "shimmer": "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
