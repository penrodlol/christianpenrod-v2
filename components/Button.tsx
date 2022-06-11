import styled from 'styled-components';
import { variant } from 'styled-system';

export interface ButtonProps {
  variant: 'primary' | 'cta' | 'icon';
}

export const Button = styled.button<ButtonProps>`
  font-weight: var(--font-weight-8);
  font-size: var(--font-size-3);
  border-radius: var(--radius-2);

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
        color: 'black',
        boxShadow: '3',
        padding: '0.8rem var(--size-7)',
        '&:hover:enabled': {
          bg: 'accent.1',
          boxShadow: '4',
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
