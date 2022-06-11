import { Box } from '@components/Box';
import LogoIcon from '@svg/logo.svg';
import Route from 'next/link';
import { Anchor } from './Anchor';

const ROUTES = ['About', 'Projects', 'Blog'];

export const Header = () => {
  return (
    <Box
      as="header"
      position="sticky"
      top="0px"
      left="0px"
      right="0px"
      bg="surface.3"
      boxShadow="2"
    >
      <Box
        as="nav"
        flexContainer
        alignItems="center"
        justifyContent="space-between"
        paddingY="fluid.1"
        paddingX="fluid.3"
        maxWidth="xl"
        margin="0 auto"
      >
        <Route href="/" passHref>
          <Anchor aria-label="Navigate to Home">
            <LogoIcon height={40} width={50} />
          </Anchor>
        </Route>
        <DesktopHeader />
      </Box>
    </Box>
  );
};

const DesktopHeader = () => (
  <Box flexContainer gap="9">
    {ROUTES.map((route) => (
      <Route key={route} href={`/`} passHref>
        <Anchor fontSize="3" aria-label={`Navigate to ${route}`}>
          {route}
        </Anchor>
      </Route>
    ))}
  </Box>
);

const MobileHeader = () => <Box></Box>;
