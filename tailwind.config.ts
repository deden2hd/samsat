import type { Config } from "tailwindcss";

const config = {
  theme: {
    extend: {
      colors: {
        brand: "#2563EB",
        "brand-dark": "#1D4ED8",
        "brand-soft": "#EFF6FF",
        page: "#F8FAFC",
        surface: "#FFFFFF",
        "surface-soft": "#F1F5F9",
        success: "#16A34A",
        warning: "#F59E0B",
        danger: "#EF4444",
        info: "#0EA5E9",
        "border-soft": "#E2E8F0",
        "border-strong": "#CBD5E1",
        "text-primary": "#0F172A",
        "text-secondary": "#475569",
        "text-muted": "#64748B",
        "text-inverse": "#FFFFFF",
        primary: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        neutral: {
          0: "#FFFFFF",
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
      },
      boxShadow: {
        soft: "0 8px 30px rgba(15, 23, 42, 0.06)",
        card: "0 12px 40px rgba(15, 23, 42, 0.08)",
        floating: "0 18px 60px rgba(37, 99, 235, 0.18)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
} satisfies Config;

export default config;
