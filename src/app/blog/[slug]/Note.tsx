'use client';

import { PropsWithChildren } from 'react';

export const Note = ({ children }: PropsWithChildren) => (
  <blockquote
    className="flex max-w-full flex-col gap-6 rounded-md border-l-8 border-solid
               border-l-brand-2 bg-2 p-5 text-2 elevation-10"
  >
    {children}
  </blockquote>
);
