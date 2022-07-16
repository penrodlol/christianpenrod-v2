function setProp(name, size, pre) {
  return [...Array(size + 1)]
    .map((_, i) => `var(--${name}-${i})`)
    .reduce((a, c, i) => ({ ...a, [[pre ? `${pre}-${i}` : i]]: c }), {});
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    colors: {
      brand: setProp('brand', 2),
      basic: setProp('basic', 2),
      surface: setProp('surface', 3),
      accent: setProp('accent', 2),
      transparent: 'transparent',
    },
    boxShadow: setProp('shadow', 6),
    screens: {
      xxs: '240px',
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1920px',
    },
    extend: {
      fontSize: setProp('font-size-fluid', 8, 'fluid'),
      spacing: setProp('size-fluid', 7, 'fluid'),
      maxWidth: {
        xxs: '240px',
        xs: '360px',
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        xxl: '1920px',
      },
    },
  },
  plugins: [require('tailwindcss-radix')({ variantPrefix: 'rdx' })],
};
