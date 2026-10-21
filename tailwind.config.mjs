/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          primary: 'var(--canvas-primary)',
          secondary: 'var(--canvas-secondary)',
          elevated: 'var(--canvas-elevated)',
        },
        ink: {
          primary: 'var(--ink-primary)',
          secondary: 'var(--ink-secondary)',
          muted: 'var(--ink-muted)',
        },
        accent: {
          hearth: 'var(--accent-hearth)',
          beeswax: 'var(--accent-beeswax)',
          lichen: 'var(--accent-lichen)',
        },
        hairline: 'var(--hairline-rule)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', '"JetBrains Mono"', 'monospace'],
      },
      fontWeight: {
        thin: '200',
        light: '300',
        normal: '300',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.16, 1, 0.3, 1)',
        'cotsy': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'sweep': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        DEFAULT: '900ms',
        '450': '450ms',
        '900': '900ms',
        '1100': '1100ms',
        '1450': '1450ms',
        '1800': '1800ms',
      },
      letterSpacing: {
        'monolith': '-0.035em',
        'editorial': '-0.025em',
        'micro': '0.22em',
        'datum': '0.26em',
      },
    },
  },
  plugins: [],
};
