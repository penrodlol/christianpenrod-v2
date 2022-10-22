import { QRole } from '@utils/trpc';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { FC, PropsWithChildren } from 'react';

export interface RoleTimelineProps {
  role: QRole<'getAll'>[number];
}

// prettier-ignore
const components = {
  p: ({children}: PropsWithChildren) => <p className="text-base font-semibold mt-3">{children}</p>,
  h5: ({children}: PropsWithChildren) =>
    <h5 className="text-lg relative mt-6 before:content-[''] before:absolute before:top-[50%]
                   before:translate-y-[-50%] before:-left-6 before:translate-x-[-0.215rem] before:w-[0.95rem]
                   before:h-[0.95rem] before:rounded-full before:bg-brand-2 before:shadow-2
                   last-of-type:before:border-[0.2rem] last-of-type:before:border-brand-2
                   last-of-type:before:bg-transparent">
      {children}
    </h5>,
};

export const RoleTimeline: FC<RoleTimelineProps> = ({ role }) => {
  const RoleMDX = useMDXComponent(role.content);

  return (
    <div className="bg-2 rounded-md shadow-2 p-7">
      <h3 className="text-2xl">{role.company}</h3>
      <h4 className="text-lg text-2">
        {role.start} - {role.end}
      </h4>
      <div className="relative">
        <div className="absolute bg-brand-2 opacity-30 rounded-md top-5 bottom-1 w-2" />
        <div className="flex flex-col pl-6">
          <RoleMDX components={components} />
        </div>
      </div>
    </div>
  );
};
