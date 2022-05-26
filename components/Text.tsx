import styled from 'styled-components';
import {
  color,
  ColorProps,
  compose,
  system,
  typography,
  TypographyProps,
} from 'styled-system';

const additional = system({
  fontSizeFluid: {
    property: 'fontSize',
    scale: 'fontSizeFluids',
  },
});

export interface TextProps extends TypographyProps, ColorProps {
  fontSizeFluid?: TypographyProps['fontSize'];
}

export const Text = styled.span<TextProps>`
  max-width: var(--size-content-2);

  ${compose(typography, color, additional)}
`;
