import { FC, HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof variants;
}

const variants = {
  primary: 'bg-brand-2 shadow-2 hover:bg-brand-3',
  cta: 'bg-accent-2 text-[black] shadow-2 hover:bg-accent-1',
};

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  ...props
}) => (
  <button
    {...props}
    className={`text-xl font-extrabold rounded-md px-8 py-[0.8rem] ${variants[variant]} ${className}`}
  >
    {children}
  </button>
);
