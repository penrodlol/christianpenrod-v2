import { THEME } from './theme';

export type BreakpointAlias = typeof BREAKPOINT_ALIASES[number];
export type BreakpointAliases = Record<BreakpointAlias, string>;
export type Breakpoints = Array<string> & Partial<BreakpointAliases>;

// prettier-ignore
export const BREAKPOINT_ALIASES = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;
export const BREAKPOINTS: Breakpoints = BREAKPOINT_ALIASES.map(
  (alias) => `var(--size-${alias})`,
);

export function initBreakpointAliases() {
  BREAKPOINT_ALIASES.forEach((alias, index) => {
    BREAKPOINTS[alias] = BREAKPOINTS[index];
    (THEME.sizes as Breakpoints)[alias] = BREAKPOINTS[index];
  });
}
