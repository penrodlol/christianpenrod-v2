import { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      {/* HEADER */}
      <main>{children}</main>
      {/* FOOTER */}
    </>
  );
};
