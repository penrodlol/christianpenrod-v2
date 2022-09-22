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
    boxShadow: fromVars('shadow', 3),
    extend: {
      textColor: fromVars('fg', 3),
      backgroundColor: fromVars('bg', 3),
      colors: { brand: fromVars('brand', 3), accent: fromVars('accent', 2) },
      fontSize: fromVars('font-size-fluid', 8, 'fluid'),
      spacing: fromVars('size-fluid', 7, 'fluid'),
      maxWidth: { prose: '60ch' },
      outlineColor: ({ theme }) => ({ DEFAULT: theme('backgroundColor.1') }),
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
