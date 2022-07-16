import LogoIcon from '@svg/logo.svg';
import Route from 'next/link';
import { Anchor } from './Anchor';

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-surface-3 shadow-2">
      <nav className="flex items-center justify-between py-2 px-fluid-4 max-w-xl mx-auto my-0">
        <Route href="/" passHref>
          <Anchor aria-label="Navigate to Home">
            <LogoIcon height={40} width={50} />
          </Anchor>
        </Route>
        <div className="flex gap-16">
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
        <Anchor className="text-xl">{route}</Anchor>
      </Route>
    ))}
  </>
);
