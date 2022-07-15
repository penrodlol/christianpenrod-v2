import { FC, HTMLAttributes } from 'react';

export const Line: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => (
  <div className={`bg-brand-1 rounded-2 ${className || 'h-1 my-3'}`} />
);
