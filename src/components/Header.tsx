import LogoIcon from '@svg/logo.svg';
import Route from 'next/link';
import { useCallback, useRef } from 'react';
import { Anchor } from './Anchor';

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-surface-3 shadow-1">
      <nav className="flex items-center justify-between py-2 px-fluid-4 max-w-screen-2xl mx-auto my-0">
        <Route href="/" passHref>
          <Anchor aria-label="Navigate to Home">
            <LogoIcon height={40} width={50} />
          </Anchor>
        </Route>
        <div className="hidden sm:flex gap-16 items-center text-xl">
          <Routes />
        </div>
        <div className="block sm:hidden">
          <RoutesMenu />
        </div>
      </nav>
    </header>
  );
};

const Routes = () => (
  <>
    {['Career', 'Blog'].map((route) => (
      <li key={route} className="list-none">
        <Route href={`/${route.toLowerCase()}`} passHref>
          <Anchor>{route}</Anchor>
        </Route>
      </li>
    ))}
  </>
);

const RoutesMenu = () => {
  const hamburger = useRef<HTMLInputElement>(null);
  const toggleOverflow = useCallback(
    () => document.body.classList.toggle('overflow-hidden'),
    [],
  );

  return (
    <div className="relative w-10 h-6">
      <input
        ref={hamburger}
        className="peer absolute z-20 inset-0 w-full h-full cursor-pointer opacity-0"
        type="checkbox"
        aria-label="Toggle menu to see routes"
        onChange={() => toggleOverflow()}
      />
      <span
        className="absolute z-10 top-0 w-full h-[0.45rem] rounded-md bg-brand-1
                   peer-checked:top-1/2 peer-checked:-translate-y-1/2 peer-checked:rotate-45"
      />
      <span
        className="absolute z-10 bottom-0 w-full h-[0.45rem] rounded-md bg-brand-2
                   peer-checked:top-1/2 peer-checked:-translate-y-1/2 peer-checked:-rotate-45"
      />
      <menu
        className="hidden fixed inset-0 backdrop-blur-md peer-checked:flex flex-col
                   gap-8 px-8 pt-16 text-4xl"
        onClick={() => {
          hamburger.current!.checked = false;
          toggleOverflow();
        }}
      >
        <Routes />
      </menu>
    </div>
  );
};
