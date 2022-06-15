import styled from 'styled-components';
import {
  color,
  ColorProps,
  compose,
  system,
  typography,
  TypographyProps,
  variant,
} from 'styled-system';

const additional = system({
  contentWidth: {
    property: 'maxWidth',
    scale: 'sizeContents',
  },
});

export interface TextProps extends TypographyProps, ColorProps {
  contentWidth?: string;
  variant?: 'fancy';
}

export const Text = styled.span<TextProps>`
  ${compose(
    typography,
    color,
    additional,
    variant({
      variants: {
        fancy: {
          fontFamily: 'var(--font-fancy)',
          color: 'brand.1',
        },
      },
    }),
  )}
`;
