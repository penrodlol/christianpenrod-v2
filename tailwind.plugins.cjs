// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

module.exports = {
  scollbar: plugin(({ addBase, theme }) =>
    addBase({
      '*, *::before, *::after': {
        scrollbarWidth: 'thin',
        scrollbarColor: `${theme('textColor.3')} transparent`,
      },
      '::-webkit-scrollbar': {
        width: theme('width.1'),
        height: theme('height.1'),
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: theme('textColor.3'),
        borderRadius: theme('borderRadius.md'),
      },
    }),
  ),
  focusVisible: plugin(({ addBase, theme }) =>
    addBase({
      'a, button, input, textarea, [tabindex="0"]': {
        '&:focus-visible': {
          outline: `solid ${theme('outlineColor.DEFAULT')}`,
          outlineWidth: theme('outlineWidth.2'),
          outlineOffset: theme('outlineOffset.4'),
        },
      },
    }),
  ),
  prism: plugin(({ addBase, theme }) =>
    addBase({
      ':root': {
        '--prism-font-family': theme('fontFamily.sans'),
        '--prism-font-size': theme('fontSize.base'),
        '--prism-background': 'hsl(231.4, 20%, 6.9%)',
        '--prism-foreground': theme('textColor.2'),
        '--prism-function': theme('colors.accent.2'),
        '--prism-keyword': theme('colors.brand.2'),
        '--prism-builtin': theme('colors.accent.2'),
        '--prism-string': theme('textColor.3'),
        '--prism-number': theme('colors.brand.2'),
        '--prism-comment': theme('textColor.3'),
        '--prism-interpolation': theme('colors.accent.1'),
        '--prism-constant': theme('textColor.2'),
        '--prism-class': theme('colors.brand.2'),
        '--prism-inline-padding-x': theme('spacing.2'),
        '--prism-property': theme('colors.brand.1'),
        '--prism-variable': theme('colors.brand.2'),
        '--prism-json-property': theme('colors.accent.2'),
        '--prism-selection-background': theme('backgroundColor.1'),
      },
    }),
  ),
  hoverCard: plugin(({ theme, addUtilities }) =>
    addUtilities({
      '.hover-card': {
        '&:hover': {
          outline: `solid ${theme('outlineColor.DEFAULT')}`,
          outlineWidth: theme('outlineWidth.2'),
          outlineOffset: theme('outlineOffset.4'),
        },
      },
    }),
  ),
  svg: plugin(({ theme, addBase }) =>
    addBase({
      svg: {
        stroke: theme('colors.brand.2'),
        strokeWidth: '3px',
      },
    }),
  ),
  evelation: plugin(({ addUtilities }) =>
    addUtilities({
      '.elevation-1': {
        boxShadow:
          '0 3px 5px -1px rgba(0,0,0,.2), ' +
          '0 5px 8px 0 rgba(0,0,0,.14), ' +
          '0 1px 14px 0 rgba(0,0,0,.12)',
      },
      '.elevation-2': {
        boxShadow:
          '0 5px 5px -3px rgba(0,0,0,.2), ' +
          '0 8px 10px 1px rgba(0,0,0,.14), ' +
          '0 3px 14px 2px rgba(0,0,0,.12)',
      },
      '.elevation-3': {
        boxShadow:
          '0 3px 5px -1px rgba(0,0,0,.2), ' +
          '0 5px 8px 0 rgba(0,0,0,.14), ' +
          '0 1px 14px 0 rgba(0,0,0,.12)',
      },
    }),
  ),
};
