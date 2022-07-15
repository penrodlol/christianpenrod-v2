import { Role } from 'contentlayer/generated';
import dayjs from 'dayjs';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { FC, PropsWithChildren } from 'react';

export interface RoleTimelineProps {
  role: Role;
}

// prettier-ignore
const components = {
  p: ({children}: PropsWithChildren<{}>) => <p className="font-semibold mt-3">{children}</p>,
  h2: ({children}: PropsWithChildren<{}>) =>
    <h2 className="text-fluid-3 relative mt-5 before:content-[''] before:absolute before:top-[50%]
                   before:translate-y-[-50%] before:left-[calc(-1.1*var(--size-5))] before:w-[0.85rem]
                   before:h-[0.85rem] before:rounded-[50%] before:bg-brand-1 before:shadow-3
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
    <div className="bg-surface-1 rounded-2 shadow-4 p-6">
      <h3 className="text-fluid-5">{role.company}</h3>
      <h4 className="text-fluid-3 text-basic-2">
        {start} - {end}
      </h4>
      <div className="relative">
        <div className="absolute bg-brand-1 opacity-30 rounded-2 top-4 bottom-1 w-2" />
        <div className="flex flex-col pl-5">
          <RoleMDX components={components} />
        </div>
      </div>
    </div>
  );
};
