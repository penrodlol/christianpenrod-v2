import { ButtonHTMLAttributes, forwardRef } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, role, ...props }, ref) => (
    <button
      {...props}
      ref={ref}
      role={role ?? 'button'}
      className={`
        bg-accent-2 text-black elevation-8 hover:bg-accent-1 text-lg font-extrabold
        rounded-md px-10 py-[0.9rem] ${className}`}
    >
      {children}
    </button>
  ),
);

Button.displayName = 'Button';
