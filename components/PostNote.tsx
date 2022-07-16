import { PropsWithChildren } from 'react';

export const PostNote = ({ children }: PropsWithChildren<unknown>) => (
  <blockquote
    className="max-w-full flex flex-col gap-6 bg-surface-2 text-gray-2 p-5
               rounded-md shadow-3 border-l-8 border-solid border-l-brand-1"
  >
    {children}
  </blockquote>
);
