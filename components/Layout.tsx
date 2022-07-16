import { PropsWithChildren } from 'react';
import { Header } from './Header';

export interface LayoutProps {
  title?: string;
  subTitle?: string;
}

export const Layout = (props: PropsWithChildren<LayoutProps>) => {
  return (
    <div className="relative z-20">
      <Header />
      <main className="px-fluid-4 max-w-screen-2xl mx-auto mb-12 mt-[clamp(1.31rem,calc(-0.52rem+9.15vw),6.00rem)]">
        <div className="max-w-max my-0 mx-auto">
          {props.title && (
            <div className="mb-fluid-5">
              <h1 className="text-fluid-7">{props.title}</h1>
              <h3 className="text-gray-2 text-fluid-6">{props.subTitle}</h3>
            </div>
          )}
          {props.children}
        </div>
      </main>
    </div>
  );
};
