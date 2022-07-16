function fromVars(name, size, pre) {
  return [...Array(size + 1)]
    .map((_, i) => `var(--${name}-${i})`)
    .reduce((a, c, i) => ({ ...a, [[pre ? `${pre}-${i}` : i]]: c }), {});
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    fontFamily: {
      serif: ["'Nunito', sans-serif"],
      fancy: ["'Sriracha', sans-serif"],
    },
    colors: {
      transparent: 'transparent',
      base: fromVars('base', 3),
      surface: fromVars('surface', 3),
      brand: fromVars('brand', 3),
      accent: fromVars('accent', 3),
    },
    extend: {
      fontSize: fromVars('font-size-fluid', 8, 'fluid'),
      spacing: fromVars('size-fluid', 7, 'fluid'),
      maxWidth: { prose: '60ch' },
      content: { blank: '""' },
    },
  },
  plugins: [require('tailwindcss-radix')({ variantPrefix: 'rdx' })],
};
