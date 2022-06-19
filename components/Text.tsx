import styled from 'styled-components';
import {
  color,
  ColorProps,
  compose,
  space,
  SpaceProps,
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

export interface TextProps extends TypographyProps, ColorProps, SpaceProps {
  contentWidth?: string;
  variant?: 'fancy';
}

export const Text = styled.span<TextProps>`
  ${compose(
    typography,
    color,
    space,
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
