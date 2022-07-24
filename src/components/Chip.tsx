import { PropsWithChildren } from 'react';

export const Chip = ({ children }: PropsWithChildren<{}>) => (
  <div className="bg-accent-2 rounded-full px-2 max-w-max">
    <span className="text-[0.9rem] text-[black] tracking-wider">
      {children}
    </span>
  </div>
);
