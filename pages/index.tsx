import { Box } from '@components/Box';
import { GridSurface } from '@components/GridSurface';
import { Header } from '@components/Header';
import { Hero } from '@components/Hero';
import { Layout } from '@components/Layout';
import { SocialLinks } from '@components/SocialLinks';

const Home = () => {
  return (
    <Layout>
      <Box flexContainer position="absolute" inset="0px" gap="4">
        <Box
          flex="60%"
          flexContainer
          flexDirection="column"
          margin="4"
          paddingLeft="4"
          paddingBottom="8"
        >
          <Header />
          <Box
            flex="auto"
            flexContainer
            flexDirection="column"
            justifyContent="space-between"
            margin="0 auto"
            marginTop="11"
          >
            <Hero />
            <SocialLinks />
          </Box>
        </Box>
        <Box flex="40%" height="100%" padding="4">
          <GridSurface size="inherit" borderRadius="3"></GridSurface>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
