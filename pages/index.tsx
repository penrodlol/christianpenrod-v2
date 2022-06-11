import { Box } from '@components/Box';
import { Hero } from '@components/Hero';
import { Layout } from '@components/Layout';

const Home = () => {
  return (
    <Layout>
      <Box maxWidth="max-content" margin="0 auto" paddingTop="fluid.5">
        <Hero />
      </Box>
      <Box></Box>
    </Layout>
  );
};

export default Home;
