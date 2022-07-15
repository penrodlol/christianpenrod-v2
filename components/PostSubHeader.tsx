import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden';
import LinkIcon from '@svg/link.svg';
import HashLink from 'next/link';
import { PropsWithChildren } from 'react';

export const PostSubHeader = ({
  id,
  children,
}: PropsWithChildren<HTMLElement>) => {
  return (
    <div id={id} className="group relative mt-fluid-4 scroll-mt-11 ">
      <HashLink href={{ hash: id }} passHref>
        <a className="text-brand-1 absolute left-[-40px] top-[15px] opacity-0 pr-3 group-hover:opacity-100">
          <LinkIcon width={30} height={30} />
        </a>
      </HashLink>
      <h2 className="text-accent-2 text-fluid-7">{children}</h2>
    </div>
  );
};

export const PostSubHeaderIntroduction = () => (
  <VisuallyHidden asChild>
    <h2 id="introduction" className="absolute top-[0px]">
      Introduction
    </h2>
  </VisuallyHidden>
);
