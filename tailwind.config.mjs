/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif:  ['Newsreader', 'Georgia', 'serif'],
        sans:   ['Instrument Sans', 'system-ui', 'sans-serif'],
        mono:   ['Martian Mono', 'monospace'],
      },
      colors: {
        blue: {
          50:  '#eff6ff',
          100: '#e8f0fd',
          600: '#2563eb',
          700: '#1a4fad',
          800: '#1e3a8a',
          900: '#0d1f5c',
        },
        teal: {
          50:  '#f0fdfa',
          100: '#ccfbf1',
          500: '#14b8a6',
          600: '#0891b2',
        },
        stone: {
          50:  '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          900: '#1c1917',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: theme('fontFamily.sans').join(', '),
            color: theme('colors.stone.700'),
            h1: { fontFamily: theme('fontFamily.serif').join(', '), color: theme('colors.stone.900') },
            h2: { fontFamily: theme('fontFamily.serif').join(', '), color: theme('colors.stone.900') },
            h3: { fontFamily: theme('fontFamily.serif').join(', '), color: theme('colors.stone.900') },
            a: { color: theme('colors.blue.700'), textDecoration: 'none', '&:hover': { textDecoration: 'underline' } },
            'code': { fontFamily: theme('fontFamily.mono').join(', ') },
          },
        },
      }),
    },
  },
  plugins: [],
};
