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
  contentWidth: {
    property: 'maxWidth',
    scale: 'sizeContents',
  },
});

export interface TextProps extends TypographyProps, ColorProps {
  contentWidth?: string;
}

export const Text = styled.span<TextProps>`
  ${compose(typography, color, additional)}
`;
