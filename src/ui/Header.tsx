'use client';

import Route from 'next/link';
import { useCallback, useRef } from 'react';
import { NextAnchor } from './Anchor';

export const Header = () => (
  <header className="sticky top-0 left-0 right-0 z-50 bg-3 elevation-5">
    <nav className="mx-auto my-0 flex max-w-screen-2xl items-center justify-between py-2 px-fluid-4">
      <Route href="/" aria-label="Home">
        <svg
          viewBox="0 0 20 15"
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
        >
          <path
            d="M6.30234 0.940713C6.48825 0.665164 6.79892 0.5 7.13132 0.5H13.1513C13.9525 0.5 14.4284 1.39511 13.9803 2.05929L9.12998 9.24845C8.94407 9.52399 8.6334 9.68916 8.301 9.68916H2.28098C1.47978 9.68916 1.00391 8.79405 1.45201 8.12987L6.30234 0.940713Z"
            className="fill-brand-2"
          />
          <path
            d="M7.5006 10.5408C7.1682 10.5408 6.85753 10.706 6.67162 10.9815L5.61968 12.5407C5.17158 13.2049 5.64746 14.1 6.44866 14.1H12.8687C13.2011 14.1 13.5118 13.9348 13.6977 13.6593L18.548 6.47013C18.9961 5.80596 18.5202 4.91084 17.719 4.91084H13.6126C13.2802 4.91084 12.9695 5.076 12.7836 5.35155L9.5799 10.1001C9.39399 10.3756 9.08332 10.5408 8.75092 10.5408H7.5006Z"
            className="fill-brand-3"
          />
        </svg>
      </Route>
      <ul className="hidden items-center gap-16 text-base sm:flex">
        <Routes />
      </ul>
      <div className="block sm:hidden">
        <RoutesMenu />
      </div>
    </nav>
  </header>
);

const Routes = () => (
  <>
    {['Career', 'Blog'].map((route) => (
      <li key={route} className="list-none">
        <NextAnchor href={`/${route.toLowerCase()}`}>{route}</NextAnchor>
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
    <div className="relative h-6 w-10">
      <input
        ref={hamburger}
        className="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
        type="checkbox"
        aria-label="Toggle menu to see routes"
        onChange={toggleOverflow}
      />
      <span
        className="absolute top-0 z-10 h-[0.45rem] w-full rounded-md bg-brand-2
                   peer-checked:top-1/2 peer-checked:-translate-y-1/2 peer-checked:rotate-45"
      />
      <span
        className="absolute bottom-0 z-10 h-[0.45rem] w-full rounded-md bg-brand-3
                   peer-checked:top-1/2 peer-checked:-translate-y-1/2 peer-checked:-rotate-45"
      />
      <menu
        className="fixed inset-0 hidden flex-col gap-8 px-8
                   pt-16 backdrop-blur-md text-4xl peer-checked:flex"
        onClick={() => {
          if (hamburger.current) hamburger.current.checked = false;
          toggleOverflow();
        }}
      >
        <Routes />
      </menu>
    </div>
  );
};
