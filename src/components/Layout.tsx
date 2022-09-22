import { PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { SEO } from './Seo';

export interface LayoutProps extends PropsWithChildren {
  title?: string;
  subTitle?: string;
  description?: string;
  tabOnly?: boolean;
}

export const Layout = (props: LayoutProps) => {
  return (
    <>
      <SEO title={props.title} description={props.description} />
      <div className="relative z-20 flex flex-col min-h-screen selection:bg-1">
        <Header />
        <main className="flex-1 px-fluid-4 max-w-screen-2xl mx-auto my-[clamp(1.31rem,calc(-0.52rem+9.15vw),6.00rem)]">
          {!props.tabOnly && props.title && (
            <div className="mb-fluid-5">
              <h1 className="text-fluid-7">{props.title}</h1>
              <h2 className="text-2 text-fluid-6">{props.subTitle}</h2>
            </div>
          )}
          <div className="max-w-[calc(100vw-var(--size-fluid-6))]">
            {props.children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
