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
      maxWidth: { prose: '60ch' },
      fontSize: {
        'fluid-1': 'clamp(0.84rem, calc(0.7rem + 0.2vw), 0.84rem)',
        'fluid-2': 'clamp(0.99rem, calc(0.82rem + 0.32vw), 1.05rem)',
        'fluid-3': 'clamp(1.16rem, calc(0.96rem + 0.49vw), 1.31rem)',
        'fluid-4': 'clamp(1.38rem, calc(1.13rem + 0.71vw), 1.64rem)',
        'fluid-5': 'clamp(1.63rem, calc(1.33rem + 1.02vw), 2.05rem)',
        'fluid-6': 'clamp(1.94rem, calc(1.55rem + 1.42vw), 2.56rem)',
        'fluid-7': 'clamp(2.3rem, calc(1.81rem + 1.95vw), 3.2rem)',
        'fluid-8': 'clamp(2.6rem, calc(1.7rem + 3.05vw), 4.01rem)',
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
    },
  },
  plugins: [],
};
