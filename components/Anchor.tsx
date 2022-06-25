import styled from 'styled-components';
import { Text } from './Text';

export const Anchor = styled(Text.withComponent('a'))`
  position: relative;
  text-decoration: none;
  border-radius: var(--radius-2);

  &:hover {
    color: var(--brand-1);
  }

  &[target='_blank'] {
    color: var(--brand-1);

    &:hover:after {
      content: '';
      position: absolute;
      right: 0;
      left: 0;
      bottom: 2px;
      border-top: 0.2rem solid var(--brand-1);
      border-radius: var(--radius-2);
    }
  }
`;
