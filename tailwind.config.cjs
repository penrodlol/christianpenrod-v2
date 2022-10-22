/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    fontFamily: {
      serif: ["'Nunito', system-ui"],
      fancy: ["'Sriracha', system-ui"],
    },
    extend: {
      textColor: { 1: '#cdd6f4', 2: '#bac2de', 3: '#a6adc8' },
      backgroundColor: { 1: '#363a4f', 2: '#232634', 3: '#181926' },
      colors: {
        brand: { 1: '#b4befe', 2: '#b7bdf8', 3: '#babbf1' },
        accent: { 1: '#e3d6f5', 2: '#ddc9f8' },
      },
      spacing: {
        'fluid-1': 'clamp(0.25rem, calc(-0.09rem + 1.71vw), 1.13rem)',
        'fluid-2': 'clamp(0.5rem, calc(0.11rem + 1.95vw), 1.5rem)',
        'fluid-3': 'clamp(0.75rem, calc(0.16rem + 2.93vw), 2.25rem)',
        'fluid-4': 'clamp(1rem, calc(0.22rem + 3.9vw), 3rem)',
        'fluid-5': 'clamp(1.5rem, calc(0.33rem + 5.85vw), 4.5rem)',
        'fluid-6': 'clamp(2rem, calc(0.44rem + 7.8vw), 6rem)',
        'fluid-7': 'clamp(3rem, calc(0.66rem + 11.71vw), 9rem)',
      },
      outlineColor: ({ theme }) => ({ DEFAULT: theme('backgroundColor.1') }),
      backgroundImage: ({ theme }) => ({
        'hero-pattern': `
          linear-gradient(${theme('colors.brand.2')} 2px, transparent 0),
          linear-gradient(90deg, ${theme('colors.brand.2')} 2px, transparent 0)
        `,
      }),
    },
  },
  plugins: [
    require('tailwindcss-fluid-type'),
    require('tailwindcss-elevation')(['responsive']),
    ({ addBase, theme }) =>
      addBase({
        '*, *::before, *::after': {
          scrollbarWidth: 'thin',
          scrollbarColor: `${theme('textColor.3')} transparent`,
          '&::-webkit-scrollbar': {
            width: theme('width.1'),
            height: theme('height.1'),
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme('textColor.3'),
            borderRadius: theme('borderRadius.md'),
          },
        },
        'a, button, input, textarea, [tabindex="0"]': {
          '&:focus-visible': {
            outline: `2px solid ${theme('outlineColor.DEFAULT')}`,
            outlineWidth: theme('outlineWidth.2'),
            outlineOffset: theme('outlineOffset.4'),
          },
        },
      }),
  ],
};
