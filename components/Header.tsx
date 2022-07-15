import LogoIcon from '@svg/logo.svg';
import Route from 'next/link';
import { Anchor } from './Anchor';

export const Header = () => {
  return (
    <header className="sticky top-[0px] left-[0px] right-[0px] z-50 bg-surface-3 shadow-2">
      <nav className="flex items-center justify-between py-2 px-fluid-4 max-w-xl mx-auto my-[0px]">
        <Route href="/" passHref>
          <Anchor aria-label="Navigate to Home">
            <LogoIcon height={40} width={50} />
          </Anchor>
        </Route>
        <div className="flex gap-9">
          <Routes />
        </div>
      </nav>
    </header>
  );
};

const Routes = () => (
  <>
    {['About', 'Projects', 'Blog'].map((route) => (
      <Route key={route} href={`/${route.toLowerCase()}`} passHref>
        <Anchor className="text-3">{route}</Anchor>
      </Route>
    ))}
  </>
);
