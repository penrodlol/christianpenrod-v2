'use client';

import { BlockquoteHTMLAttributes, FC } from 'react';

export type NoteProps = BlockquoteHTMLAttributes<HTMLQuoteElement>;

export const Note: FC<NoteProps> = ({ children }) => (
  <blockquote
    className="flex max-w-full flex-col gap-6 rounded-md border-l-8 border-solid
               border-l-brand-2 bg-2 p-5 text-2 elevation-3"
  >
    {children}
  </blockquote>
);
