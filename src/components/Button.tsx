import { ButtonHTMLAttributes, FC } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => (
  <button
    {...props}
    className={`
      bg-accent-2 text-[black] shadow-2 hover:bg-accent-1 text-xl font-extrabold
      rounded-md px-8 py-[0.8rem]  ${className}`}
  >
    {children}
  </button>
);
