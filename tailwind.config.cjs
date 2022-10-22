/* eslint-disable @typescript-eslint/no-var-requires */
function fromVars(name, size, pre) {
  return [...Array(size + 1)]
    .map((_, i) => `var(--${name}-${i})`)
    .reduce((a, c, i) => ({ ...a, [[pre ? `${pre}-${i}` : i]]: c }), {});
}

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
      spacing: fromVars('size-fluid', 7, 'fluid'),
      maxWidth: { prose: '60ch' },
      outlineColor: ({ theme }) => ({ DEFAULT: theme('backgroundColor.1') }),
    },
  },
  plugins: [
    require('tailwindcss-fluid-type'),
    require('tailwindcss-elevation')(['responsive']),
  ],
};
