import { MOTION_OK } from '@const/motion';
import styled, { keyframes } from 'styled-components';
import { variant } from 'styled-system';

const moveUpAnimation = keyframes`
  to { transform: translateY(-0.125rem); }
`;

export interface ButtonProps {
  variant: 'primary' | 'cta' | 'basic' | 'icon';
}

export const Button = styled.button<ButtonProps>`
  font-weight: var(--font-weight-8);
  font-size: var(--font-size-2);
  border-radius: var(--radius-2);

  ${MOTION_OK} {
    &:hover:enabled {
      animation: ${moveUpAnimation} 0.5s forwards;
      animation-timing-function: var(--ease-squish-5);
    }
  }

  ${variant({
    variants: {
      primary: {
        bg: 'brand.2',
        boxShadow: '3',
        padding: '0.8rem var(--size-7)',
        '&:hover:enabled': {
          bg: 'brand.1',
          boxShadow: '4',
        },
      },
      cta: {
        bg: 'accent.2',
        color: 'surface.1',
        boxShadow: '3',
        padding: '0.8rem var(--size-7)',
        '&:hover:enabled': {
          bg: 'accent.1',
          boxShadow: '4',
        },
      },
      basic: {
        bg: 'transparent',
        color: 'text.1',
        '&:hover:enabled': {
          animation: 'unset',
        },
      },
      icon: {
        bg: 'transparent',
        '&:hover:enabled': {
          color: 'brand.1',
          filter: 'drop-shadow(3px 3px 5px hsl(var(--shadow-color) / 65%))',
        },
      },
    },
  })}
`;
