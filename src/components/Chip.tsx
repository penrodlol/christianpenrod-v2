import { FC, HTMLAttributes } from 'react';

export type ChipProps = HTMLAttributes<HTMLSpanElement>;

export const Chip: FC<ChipProps> = ({ className, children }) => (
  <span
    className={`bg-brand-1 rounded-full px-2 h-max max-w-max
              text-black tracking-wider ${className}`}
  >
    {children}
  </span>
);
