'use client';

import { FC, HTMLAttributes } from 'react';

export const Line: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => (
  <div className={`rounded-md bg-brand-2 ${className || 'my-4 h-1'}`} />
);
