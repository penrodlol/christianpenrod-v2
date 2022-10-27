'use client';

import { bio } from 'contentlayer/generated';
import { ArrowRight } from 'lucide-react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { PropsWithChildren } from 'react';
import { Anchor } from './Anchor';

// prettier-ignore
const components = {
  a: Anchor,
  ul: ({ children }: PropsWithChildren) => (<ul className="flex flex-col gap-1">{children}</ul>),
  li: ({ children }: PropsWithChildren) => (
    <li className="flex gap-2 items-center text-lg">
      <ArrowRight className="w-7 h-7 stroke-accent-2 min-w-[20px]" strokeWidth="3" />
      <p>{children}</p>
    </li>
  ),
};

export const BioMDX = () => {
  const MDX = useMDXComponent(bio.body.code);
  return <MDX components={components} />;
};
