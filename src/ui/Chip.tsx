'use client';

import { FC, HTMLAttributes } from 'react';

export type ChipProps = HTMLAttributes<HTMLSpanElement>;

export const Chip: FC<ChipProps> = ({ className, children }) => (
  <span
    className={`h-max max-w-max rounded-full bg-brand-1 px-2
                tracking-wider text-black ${className}`}
  >
    {children}
  </span>
);
