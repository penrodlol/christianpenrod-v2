import ArrowRightIcon from '@svg/arrow-right.svg';
import type { Bio } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import dynamic from 'next/dynamic';
import { FC, PropsWithChildren } from 'react';

export interface BioMdxProps {
  bio: Bio;
}

// prettier-ignore
const components = {
  a: dynamic<any>(() => import('@components/Anchor').then((m) => m.Anchor)),
  ul: ({ children }: PropsWithChildren) => (<ul className="flex flex-col gap-1">{children}</ul>),
  li: ({ children }: PropsWithChildren) => (
    <li className="flex gap-2 items-center text-fluid-4">
      <ArrowRightIcon className="w-7 h-7 fill-accent-2 min-w-[20px]" />
      <p>{children}</p>
    </li>
  ),
};

export const BioMDX: FC<BioMdxProps> = ({ bio }) => {
  const MDX = useMDXComponent(bio.body.code);
  return <MDX components={components} />;
};
