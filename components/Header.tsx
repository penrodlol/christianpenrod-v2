import { Box } from '@components/Box';
import LogoIcon from '@svg/logo.svg';
import Route from 'next/link';
import { Anchor } from './Anchor';

export const Header = () => {
  return (
    <Box
      as="header"
      position="sticky"
      top="0px"
      left="0px"
      right="0px"
      zIndex="important"
      bg="surface.3"
      boxShadow="2"
    >
      <Box
        as="nav"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingY="2"
        paddingX="fluid.4"
        maxWidth="xl"
        margin="0 auto"
      >
        <Route href="/" passHref>
          <Anchor aria-label="Navigate to Home">
            <LogoIcon height={40} width={50} />
          </Anchor>
        </Route>
        <Box display="flex" gap="9">
          <Routes />
        </Box>
      </Box>
    </Box>
  );
};

const Routes = () => (
  <>
    {['About', 'Projects', 'Blog'].map((route) => (
      <Route key={route} href={`/${route.toLowerCase()}`} passHref>
        <Anchor color="text.1" fontSize="3">
          {route}
        </Anchor>
      </Route>
    ))}
  </>
);
