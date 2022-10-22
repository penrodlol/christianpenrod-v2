import { PropsWithChildren } from 'react';

export const PostNote = ({ children }: PropsWithChildren) => (
  <blockquote
    className="max-w-full flex flex-col gap-6 bg-2 text-2 p-5
               rounded-md elevation-10 border-l-8 border-solid border-l-brand-2"
  >
    {children}
  </blockquote>
);
