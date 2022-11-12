'use client';

import { GetSortedRoles } from '@utils/contentlayer/roles';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { FC, PropsWithChildren } from 'react';

// prettier-ignore
const components = {
  p: ({children}: PropsWithChildren) => <p className="text-base font-semibold mt-3 max-w-[60ch]">{children}</p>,
  h5: ({children}: PropsWithChildren) =>
    <h5 className="text-lg relative mt-6 before:content-[''] before:absolute before:top-[50%]
                   before:translate-y-[-50%] before:-left-6 before:translate-x-[-0.215rem] before:w-[0.95rem]
                   before:h-[0.95rem] before:rounded-full before:bg-brand-2 before:elevation-10
                   last-of-type:before:border-[0.2rem] last-of-type:before:border-brand-2
                   last-of-type:before:bg-transparent">
      {children}
    </h5>,
};

export interface MDXProps {
  content: GetSortedRoles[number]['body']['code'];
}

export const MDX: FC<MDXProps> = ({ content }) => {
  const _MDX = useMDXComponent(content);
  return <_MDX components={components} />;
};
