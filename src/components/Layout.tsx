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
      <div className="flex flex-col min-h-screen relative z-20">
        <Header />
        <main
          className="flex-1 px-fluid-4 max-w-screen-2xl mx-auto
                     my-[clamp(1.31rem,calc(-0.52rem+9.15vw),6.00rem)]"
        >
          {!props.tabOnly && props.title && (
            <div className="mb-fluid-5">
              <h1 className="text-4xl !leading-relaxed">{props.title}</h1>
              <h2 className="text-2 text-3xl">{props.subTitle}</h2>
            </div>
          )}
          <div className="max-w-[calc(100vw-clamp(2rem,calc(0.44rem+7.8vw),6rem))]">
            {props.children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
