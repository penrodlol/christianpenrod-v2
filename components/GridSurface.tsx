import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Box } from './Box';

export type GridSurfaceProps = PropsWithChildren<typeof Box.defaultProps>;

export const GridSurface = (({ children, ...props }: GridSurfaceProps) => (
  <Wrapper position="relative" zIndex="1" bg="surface.1" {...props}>
    <Box position="relative" zIndex="2">
      {children}
    </Box>
  </Wrapper>
)) as typeof Box;

const Wrapper = styled(Box)`
  &::before {
    --horizontal: linear-gradient(var(--brand-1) 2px, transparent 0);
    --vertical: linear-gradient(90deg, var(--brand-1) 2px, transparent 0);

    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.125;
    border-radius: inherit;
    z-index: var(--layer-1);
    box-shadow: inset 0px 0px 0px 2px var(--brand-1);
    background-image: var(--horizontal), var(--vertical);
    background-size: var(--size-10) var(--size-10);
  }
`;
