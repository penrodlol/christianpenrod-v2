import styled from 'styled-components';
import { Text } from './Text';

export interface AnchorProps {
  external?: boolean;
}

export const Anchor = styled(Text.withComponent('a')).attrs<AnchorProps>(
  ({ external, ...props }) => ({
    ...props,
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener noreferrer' : undefined,
  }),
)<AnchorProps>`
  position: relative;
  text-decoration: none;
  border-radius: var(--radius-2);

  &:hover {
    color: var(--accent-2);
  }
`;
