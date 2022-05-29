import styled, { css } from 'styled-components';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
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
    ColorProps,
    BorderProps,
    PositionProps,
    ShadowProps {
  flexContainer?: boolean;
  gap?: string;
  borderRadiusBlob?: string;
  inset?: string;
}

export const Box = styled.div<BoxProps>(
  (props) => css`
    ${props.flexContainer && 'display: flex;'}
    ${props.gap && `gap: var(--size-${props.gap});`}
    ${props.inset && `inset: ${props.inset};`}

    ${compose(
      space,
      layout,
      flexbox,
      color,
      border,
      position,
      shadow,
      additional,
    )}
  `,
);
