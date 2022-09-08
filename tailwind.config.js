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
      textColor: { 1: '#f1f3f5', 2: '#ced4da', 3: '#adb5bd' },
      backgroundColor: { 1: '#495057', 2: '#343a40', 3: '#212529' },
      colors: {
        brand: { 1: '#ccbff2', 2: '#b197fc', 3: '#9775fa' },
        accent: { 1: '#e3d6f5', 2: '#ddc9f8' },
      },
      outlineColor: ({ theme }) => ({ DEFAULT: theme('backgroundColor.1') }),

      fontSize: fromVars('font-size-fluid', 8, 'fluid'),
      spacing: fromVars('size-fluid', 7, 'fluid'),
      maxWidth: { prose: '60ch' },
      content: { blank: '""' },
    },
  },
  plugins: [],
};
