import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': 'var(--color-text)',
        'background': 'var(--color-background)',
      },
      fontFamily: {
        comicNue: ['var(--font-comic-neue)'],
        rubicDoodle: ['var(--font-rubic-doodle-shadow)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
