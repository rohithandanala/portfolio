import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Space Grotesk', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'draw-line': {
          to: {
            'stroke-dashoffset': '0',
          },
        },
        'jelly-border': {
          '0%': { 'border-radius': '48% 52% 68% 32% / 42% 29% 71% 58%' },
          '10%': { 'border-radius': '42% 58% 72% 28% / 47% 41% 59% 53%' },
          '20%': { 'border-radius': '41% 59% 62% 38% / 54% 46% 54% 46%' },
          '30%': { 'border-radius': '51% 49% 52% 48% / 57% 42% 58% 43%' },
          '40%': { 'border-radius': '56% 44% 40% 60% / 56% 53% 47% 44%' },
          '50%': { 'border-radius': '52% 48% 35% 65% / 51% 58% 42% 49%' },
          '60%': { 'border-radius': '44% 56% 43% 57% / 42% 54% 46% 58%' },
          '70%': { 'border-radius': '39% 61% 51% 49% / 54% 43% 57% 46%' },
      '80%': { 'border-radius': '49% 51% 60% 40% / 51% 51% 49% 49%' },
          '90%': { 'border-radius': '55% 45% 66% 34% / 47% 45% 55% 53%' },
          '100%': { 'border-radius': '48% 52% 68% 32% / 42% 29% 71% 58%' },
        },
        'pulse-subtle': {
            '0%, 100%': { opacity: '1', transform: 'scale(1)' },
            '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        'chatbot-wobble': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1.0)' },
          '4.76%': { transform: 'translate(-4px, -2px) rotate(5deg) scale(1.05)' },
          '9.52%': { transform: 'translate(4px, 1px) rotate(-5deg) scale(1.02)' },
          '14.28%': { transform: 'translate(-3px, -1px) rotate(3deg) scale(1.04)' },
          '19.04%': { transform: 'translate(3px, 1px) rotate(-3deg) scale(1.01)' },
          '23.8%': { transform: 'translate(-2px, 0) rotate(2deg) scale(1.03)' },
          '28.56%': { transform: 'translate(2px, 0) rotate(-2deg) scale(1.0)' },
        },
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        'fade-in-up': { from: { opacity: '0', transform: 'translateY(10px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        'fade-in-scale-up': { from: { opacity: '0', transform: 'scale(0.9)' }, to: { opacity: '1', transform: 'scale(1)' } },
        'slide-up': { from: { transform: 'translateY(20px)', opacity: '0' }, to: { transform: 'translateY(0)', opacity: '1' } },
        'slide-in-from-left': { from: { transform: 'translateX(-20px)', opacity: '0' }, to: { transform: 'translateX(0)', opacity: '1' } },
        'slide-in-from-right': { from: { transform: 'translateX(20px)', opacity: '0' }, to: { transform: 'translateX(0)', opacity: '1' } },
        'slide-down': { from: { transform: 'translateY(-20px)', opacity: '0' }, to: { transform: 'translateY(0)', opacity: '1' } },
        'fade-in-zoom': { from: { opacity: '0', transform: 'scale(0.95)' }, to: { opacity: '1', transform: 'scale(1)' } },
        'dot-flow': {
          '0%': { offsetDistance: '0%', opacity: 0.5 },
          '25%': { opacity: 1 },
          '75%': { opacity: 1 },
          '100%': { offsetDistance: '100%', opacity: 0.5 },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'draw-line': 'draw-line 1s ease-in-out forwards',
        'jelly-border': 'jelly-border 16s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'chatbot-wobble': 'chatbot-wobble 31.5s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'fade-in-scale-up': 'fade-in-scale-up 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'slide-in-from-left': 'slide-in-from-left 0.5s ease-out forwards',
        'slide-in-from-right': 'slide-in-from-right 0.5s ease-out forwards',
        'slide-down': 'slide-down 0.5s ease-out forwards',
        'fade-in-zoom': 'fade-in-zoom 0.5s ease-out forwards',
        'dot-flow': 'dot-flow infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
