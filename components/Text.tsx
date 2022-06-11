import styled from 'styled-components';
import {
  color,
  ColorProps,
  compose,
  typography,
  TypographyProps,
} from 'styled-system';

export type TextProps = TypographyProps | ColorProps;

export const Text = styled.span<TextProps>`
  max-width: var(--size-content-2);

  ${compose(typography, color)}
`;
