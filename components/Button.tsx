import { FC, HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof variants;
}

const variants = {
  primary: 'bg-brand-2 shadow-3 hover:bg-brand-3 hover:enabled:shadow-4',
  cta: 'bg-accent-2 text-[black] shadow-3 hover:bg-accent-1 hover:enabled:shadow-4',
  icon: 'p-[0px] hover:enabled:text-brand-1',
};

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  ...props
}) => (
  <button
    {...props}
    className={`text-3 font-extrabold rounded-2 px-7 py-[0.8rem] ${variants[variant]} ${className}`}
  >
    {children}
  </button>
);
