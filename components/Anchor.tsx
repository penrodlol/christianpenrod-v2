import styled from 'styled-components';
import { Text } from './Text';

export const Anchor = styled(Text.withComponent('a'))`
  position: relative;
  text-decoration: none;
  border-radius: var(--radius-2);

  &[target='_blank'] {
    color: var(--brand-1);
  }

  &:hover {
    color: var(--brand-1);
  }
`;
