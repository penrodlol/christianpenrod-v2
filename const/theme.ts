import { BREAKPOINTS, initBreakpointAliases } from './breakpoints';

function setProp(name: string, size: number, more?: Record<string, unknown>) {
  const prop = [...Array(size + 1)].map((_, i) => `var(--${name}-${i})`);
  if (more) Object.entries(more).forEach(([k, v]) => ((prop as any)[k] = v));
  return prop;
}

export const THEME = {
  // Colors
  colors: {
    text: setProp('text', 2),
    surface: setProp('surface', 3),
    brand: setProp('brand', 4),
    accent: setProp('accent', 2),
  },

  // Typography
  fonts: [{ serif: 'var(--font-serif)', fancy: 'var(--font-fancy)' }],
  fontSizes: setProp('font-size', 8, { fluid: setProp('font-size-fluid', 8) }),
  letterSpacings: setProp('font-letterspacing', 7),
  lineHeights: setProp('font-lineheight', 5),
  fontWeights: setProp('font-weight', 9),

  // Layout
  sizes: setProp('size', 15, { fluid: setProp('size-fluid', 10) }),
  sizeContents: setProp('size-content', 3),
  space: setProp('size', 15, { fluid: setProp('size-fluid', 10) }),
  breakpoints: BREAKPOINTS,

  // Misc
  borders: setProp('border-size', 5),
  radii: setProp('radius', 6, { round: 'var(--radius-round)' }),
  radiiBlobs: setProp('radius-blob', 5),
  shadows: setProp('shadow', 6),
  zIndices: setProp('layer', 5, { important: 'var(--layer-important)' }),
};

initBreakpointAliases();
