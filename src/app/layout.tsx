import { Nunito } from '@next/font/google';
import { Footer } from '@ui/Footer';
import { Header } from '@ui/Header';
import 'prism-theme-vars/base.css';
import { PropsWithChildren } from 'react';
import 'tailwindcss/tailwind.css';

const serif = Nunito({
  weight: ['600', '800'],
  subsets: ['cyrillic'],
  variable: '--font-serif',
  fallback: ['system-ui'],
});

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en" className={serif.variable}>
    <head />
    <body
      className="bg-3 font-serif font-extrabold tracking-wide text-1 selection:bg-1
                 before:fixed before:-inset-8 before:z-10 before:bg-hero-pattern
                 before:bg-[length:5rem_5rem] before:opacity-[0.075] before:content-['']"
    >
      <div className="relative z-20 flex min-h-screen flex-col">
        <Header />
        <main className="mx-auto my-[clamp(1.31rem,calc(-0.52rem+9.15vw),6.00rem)] max-w-screen-2xl flex-1 px-fluid-4">
          <div className="max-w-[calc(100vw-clamp(2rem,calc(0.44rem+7.8vw),6rem))]">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </body>
  </html>
);

export default RootLayout;
