'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, role, ...props }, ref) => (
    <button
      {...props}
      ref={ref}
      role={role ?? 'button'}
      className={`
        rounded-md bg-accent-2 px-8 py-[0.8rem] font-extrabold text-black
        text-lg elevation-8 hover:bg-accent-1 ${className}`}
    >
      {children}
    </button>
  ),
);

Button.displayName = 'Button';
