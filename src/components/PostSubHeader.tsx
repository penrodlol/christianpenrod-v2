import LinkIcon from '@svg/link.svg';
import HashLink from 'next/link';
import { PropsWithChildren } from 'react';

export const PostSubHeader = ({
  id,
  children,
}: PropsWithChildren<HTMLElement>) => {
  return (
    <div id={id} className="group relative mt-fluid-4 scroll-mt-28 ">
      <HashLink href={{ hash: id }} passHref>
        <a
          className="text-brand-2 absolute left-[-40px] top-1/2 -translate-y-1/2 opacity-0 pr-4
                     group-hover:opacity-100 hidden lg:block"
          aria-label={children.toString()}
        >
          <LinkIcon width={30} height={30} />
        </a>
      </HashLink>
      <h2 className="text-accent-2 text-4xl">{children}</h2>
    </div>
  );
};

export const PostSubHeaderIntroduction = () => (
  <h2 id="introduction" className="sr-only top-0">
    Introduction
  </h2>
);
