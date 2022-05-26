import styled, { css } from 'styled-components';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  compose,
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
    GridProps,
    BackgroundProps,
    BorderProps,
    PositionProps,
    ShadowProps {
  grid?: boolean;
  borderRadiusBlob?: string;
}

export const Box = styled.div<BoxProps>(
  (props) => css`
    ${props.grid && 'display: grid;'}

    ${compose(
      space,
      layout,
      grid,
      background,
      border,
      position,
      shadow,
      additional,
    )}
  `,
);
