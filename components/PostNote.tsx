import { PropsWithChildren } from 'react';

export const PostNote = ({ children }: PropsWithChildren<unknown>) => (
  <blockquote
    className="max-w-full flex flex-col gap-5 bg-surface-2 text-basic-2 p-4
               rounded-2 shadow-3 border-l-2 border-solid border-l-brand-1"
  >
    {children}
  </blockquote>
);
