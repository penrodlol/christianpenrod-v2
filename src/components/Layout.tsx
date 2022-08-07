import { PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { SEO } from './Seo';

export interface LayoutProps {
  title?: string;
  subTitle?: string;
  description?: string;
  tabOnly?: boolean;
}

export const Layout = (props: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <SEO title={props.title} description={props.description} />
      <div className="relative z-20 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow px-fluid-4 max-w-screen-2xl mx-auto my-[clamp(1.31rem,calc(-0.52rem+9.15vw),6.00rem)]">
          <div className="max-w-max my-0 mx-auto">
            {!props.tabOnly && props.title && (
              <div className="mb-fluid-5">
                <h1 className="text-fluid-7">{props.title}</h1>
                <h3 className="text-base-2 text-fluid-6">{props.subTitle}</h3>
              </div>
            )}
            {props.children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
