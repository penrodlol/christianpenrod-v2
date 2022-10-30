'use client';

import { Link } from 'lucide-react';
import HashLink from 'next/link';
import { PropsWithChildren } from 'react';

export const SubHeader = ({ id, children }: PropsWithChildren<HTMLElement>) => {
  return (
    <div id={id} className="group relative mt-fluid-4 scroll-mt-28 ">
      <HashLink
        href={{ hash: id }}
        className="absolute left-[-40px] top-1/2 hidden -translate-y-1/2 pr-4 text-brand-2
                   opacity-0 group-hover:opacity-100 lg:block"
        aria-label={children.toString()}
      >
        <Link className="h-7 w-7" strokeWidth="3" />
      </HashLink>
      <h2 className="text-accent-2 text-4xl">{children}</h2>
    </div>
  );
};

export const SubHeaderIntroduction = () => (
  <h2 id="introduction" className="sr-only top-0">
    Introduction
  </h2>
);
