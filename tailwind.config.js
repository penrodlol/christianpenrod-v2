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
    colors: {
      transparent: 'transparent',
      base: fromVars('base', 3),
      surface: fromVars('surface', 3),
      brand: fromVars('brand', 3),
      accent: fromVars('accent', 3),
    },
    boxShadow: fromVars('shadow', 3),
    extend: {
      fontSize: fromVars('font-size-fluid', 8, 'fluid'),
      spacing: fromVars('size-fluid', 7, 'fluid'),
      maxWidth: { prose: '60ch' },
      content: { blank: '""' },
    },
  },
  plugins: [],
};
