import { Box } from '@components/Box';
import LogoIcon from '@svg/logo.svg';
import Route from 'next/link';
import { Anchor } from './Anchor';

const ROUTES = ['About', 'Projects', 'Blog'];

export const Header = () => {
  return (
    <header>
      <Box
        as="nav"
        flexContainer
        alignItems="center"
        justifyContent="space-between"
      >
        <Route href="/" passHref>
          <Anchor aria-label="Navigate to Home">
            <LogoIcon height={40} width={50} />
          </Anchor>
        </Route>
        <Box flexContainer gap="8">
          {ROUTES.map((route) => (
            <Route key={route} href={`/`} passHref>
              <Anchor fontSize="4" aria-label={`Navigate to ${route}`}>
                {route}
              </Anchor>
            </Route>
          ))}
        </Box>
      </Box>
    </header>
  );
};
