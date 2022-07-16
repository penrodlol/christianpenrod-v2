function setProp(name, size, pre) {
  return [...Array(size + 1)]
    .map((_, i) => `var(--${name}-${i})`)
    .reduce((a, c, i) => ({ ...a, [[pre ? `${pre}-${i}` : i]]: c }), {});
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    fontFamily: {
      serif: ['var(--font-serif)'],
      fancy: ['var(--font-fancy)'],
    },
    colors: {
      transparent: 'transparent',
      gray: { 1: '#f1f3f5', 2: '#ced4da' },
      surface: { 1: '#495057', 2: '#343a40', 3: '#212529' },
      brand: { 1: '#b197fc', 2: '#9775fa' },
      accent: { 1: '#e3d6f5', 2: '#ddc9f8' },
    },
    boxShadow: setProp('shadow', 6),
    extend: {
      fontSize: setProp('font-size-fluid', 8, 'fluid'),
      spacing: setProp('size-fluid', 7, 'fluid'),
      maxWidth: { prose: '60ch' },
      content: { blank: '""' },
    },
  },
  plugins: [require('tailwindcss-radix')({ variantPrefix: 'rdx' })],
};
