// @ts-ignore
import OpenPropsSizes from 'open-props/src/sizes';

export type BreakpointSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type Breakpoints = Record<BreakpointSize, number>;

export const BREAKPOINTS: Breakpoints = {
  xxs: OpenPropsSizes['--size-xxs'],
  xs: OpenPropsSizes['--size-xs'],
  sm: OpenPropsSizes['--size-sm'],
  md: OpenPropsSizes['--size-md'],
  lg: OpenPropsSizes['--size-lg'],
  xl: OpenPropsSizes['--size-xl'],
  xxl: OpenPropsSizes['--size-xxl'],
};
