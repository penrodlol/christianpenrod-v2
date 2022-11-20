/* eslint-disable @typescript-eslint/no-var-requires */
const fluidTypePlugin = require('tailwindcss-fluid-type');
const elevationPlugin = require('tailwindcss-elevation')(['responsive']);
const internalPlugin = require('./tailwind.plugins.cjs');
const { frappe, mocha, macchiato } = require('@catppuccin/palette').variants;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.tsx', './src/ui/**/*.tsx'],
  theme: {
    fontFamily: { serif: ['var(--font-serif)'] },
    extend: {
      textColor: {
        1: mocha.text.hex,
        2: mocha.subtext1.hex,
        3: mocha.subtext0.hex,
      },
      backgroundColor: {
        1: macchiato.surface0.hex,
        2: frappe.crust.hex,
        3: macchiato.crust.hex,
      },
      colors: {
        brand: {
          1: mocha.lavender.hex,
          2: macchiato.lavender.hex,
          3: frappe.lavender.hex,
        },
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
  future: { hoverOnlyWhenSupported: true },
  plugins: [
    fluidTypePlugin,
    elevationPlugin,
    internalPlugin.scollbar,
    internalPlugin.focusVisible,
    internalPlugin.prism,
    internalPlugin.hoverCard,
    internalPlugin.svg,
  ],
};
