import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Nunito_Sans, Sriracha } from '@next/font/google';
import 'prism-theme-vars/base.css';
import { PropsWithChildren } from 'react';
import 'tailwindcss/tailwind.css';

const fontSerifBase = Nunito_Sans({ weight: '400' });
const fontSerifBold = Nunito_Sans({ weight: '600' });
const fontSerifExtraBold = Nunito_Sans({ weight: '800' });
const fontFancy = Sriracha({ weight: '400' });

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={`
        ${fontSerifBase.className}
        ${fontSerifBold.className}
        ${fontSerifExtraBold.className}
        ${fontFancy.className}
      `}
    >
      <body
        className="font-serif font-extrabold tracking-wide text-1 bg-3 selection:bg-1
                   before:fixed before:content-[''] before:-inset-8 before:z-10
                   before:opacity-[0.075] before:bg-[length:5rem_5rem] before:bg-hero-pattern"
      >
        <div className="flex flex-col min-h-screen relative z-20">
          <Header />
          <main
            className="flex-1 px-fluid-4 max-w-screen-2xl mx-auto
                       my-[clamp(1.31rem,calc(-0.52rem+9.15vw),6.00rem)]"
          >
            <div className="max-w-[calc(100vw-clamp(2rem,calc(0.44rem+7.8vw),6rem))]">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
