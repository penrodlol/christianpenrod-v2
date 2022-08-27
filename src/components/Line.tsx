import { FC, HTMLAttributes } from 'react';

export const Line: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => (
  <div className={`bg-brand-2 rounded-md ${className || 'h-1 my-4'}`} />
);
