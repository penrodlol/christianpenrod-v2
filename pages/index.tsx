import { Box } from '@components/Box';
import { Header } from '@components/Header';
import { Hero } from '@components/Hero';
import { Layout } from '@components/Layout';
import { SocialLinks } from '@components/SocialLinks';

const Home = () => {
  return (
    <Layout>
      <Box flexContainer height="100vh" gap="4">
        <Box
          flex="65%"
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
            gap="8"
            margin="0 auto"
            paddingTop="11"
          >
            <Hero />
            <SocialLinks />
          </Box>
        </Box>
        <Box flex="35%" flexContainer padding="4">
          <Box bg="surface.1" size="100%" borderRadius="3"></Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
