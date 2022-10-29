'use client';

import { getSortedRoles, GetSortedRoles } from '@utils/contentlayer/roles';
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

const RoleMDX: FC<GetSortedRoles[number]> = ({ body }) => {
  const MDX = useMDXComponent(body.code);
  return <MDX components={components} />;
};

export const RolesTimeline = () => {
  const roles = getSortedRoles();

  return (
    <div className="mx-auto flex max-w-max flex-col gap-8">
      {roles.map((role) => (
        <div key={role._id} className="rounded-md bg-2 p-7 elevation-10">
          <h3 className="text-2xl">{role.company}</h3>
          <h4 className="text-2 text-lg">
            {role.start} - {role.end}
          </h4>
          <div className="relative">
            <div className="absolute top-5 bottom-1 w-2 rounded-md bg-brand-2 opacity-30" />
            <div className="flex flex-col pl-6">
              <RoleMDX {...role} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
