import { Role } from 'contentlayer/generated';
import dayjs from 'dayjs';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { FC, PropsWithChildren } from 'react';

export interface RoleTimelineProps {
  role: Role;
}

// prettier-ignore
const components = {
  p: ({children}: PropsWithChildren) => <p className="text-lg font-semibold mt-3">{children}</p>,
  h2: ({children}: PropsWithChildren) =>
    <h2 className="text-fluid-3 relative mt-6 before:content-blank before:absolute before:top-[50%]
                   before:translate-y-[-50%] before:-left-6 before:translate-x-[-0.215rem] before:w-[0.95rem]
                   before:h-[0.95rem] before:rounded-full before:bg-brand-1 before:shadow-2
                   last-of-type:before:border-[0.2rem] last-of-type:before:border-brand-1
                   last-of-type:before:bg-transparent">
      {children}
    </h2>,
};

export const RoleTimeline: FC<RoleTimelineProps> = ({ role }) => {
  const RoleMDX = useMDXComponent(role.body.code);

  const start = dayjs.utc(role.start).format('MMM Do, YYYY');
  const end = role.end ? dayjs.utc(role.end).format('MMM Do, YYYY') : 'Present';

  return (
    <div className="bg-surface-2 rounded-md shadow-2 p-7">
      <h3 className="text-fluid-5">{role.company}</h3>
      <h4 className="text-fluid-3 text-base-2">
        {start} - {end}
      </h4>
      <div className="relative">
        <div className="absolute bg-brand-1 opacity-30 rounded-md top-5 bottom-1 w-2" />
        <div className="flex flex-col pl-6">
          <RoleMDX components={components} />
        </div>
      </div>
    </div>
  );
};
