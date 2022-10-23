// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

module.exports = {
  scollbar: plugin(({ addBase, theme }) =>
    addBase({
      '*, *::before, *::after': {
        scrollbarWidth: 'thin',
        scrollbarColor: `${theme('textColor.3')} transparent`,
        '&::-webkit-scrollbar': {
          width: theme('width.1'),
          height: theme('height.1'),
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: theme('textColor.3'),
          borderRadius: theme('borderRadius.md'),
        },
      },
    }),
  ),
  focusVisible: plugin(({ addBase, theme }) =>
    addBase({
      'a, button, input, textarea, [tabindex="0"]': {
        '&:focus-visible': {
          outline: `2px solid ${theme('outlineColor.DEFAULT')}`,
          outlineWidth: theme('outlineWidth.2'),
          outlineOffset: theme('outlineOffset.4'),
        },
      },
    }),
  ),
  prism: plugin(({ addBase, theme }) =>
    addBase({
      ':root': {
        '--prism-font-family': theme('fontFamily.serif'),
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
};
