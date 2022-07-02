import styled, { css } from 'styled-components';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  system,
} from 'styled-system';

const additional = system({
  borderRadiusBlob: {
    property: 'borderRadius',
    scale: 'radiiBlobs',
  },
});

export interface BoxProps
  extends SpaceProps,
    LayoutProps,
    FlexboxProps,
    GridProps,
    ColorProps,
    BorderProps,
    PositionProps,
    ShadowProps {
  gap?: string;
  borderRadiusBlob?: string;
  inset?: string;
}

export const Box = styled.div<BoxProps>(
  (props) => css`
    ${props.gap && `gap: var(--size-${props.gap});`}
    ${props.inset && `inset: ${props.inset};`}

    ${compose(
      space,
      layout,
      flexbox,
      grid,
      color,
      border,
      position,
      shadow,
      additional,
    )}
  `,
);
