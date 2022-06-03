import { Box } from '@components/Box';
import { Card } from '@components/Card';
import { Header } from '@components/Header';
import { Hero } from '@components/Hero';
import { Layout } from '@components/Layout';
import { SocialLinks } from '@components/SocialLinks';
import { Text } from '@components/Text';
import ArrowRightIcon from '@svg/arrow-right.svg';

const Home = () => {
  return (
    <Layout>
      <Box flexContainer height="100vh" gap="4">
        <Box
          as="section"
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
        <Box as="section" flex="35%" flexContainer padding="4">
          <Box
            bg="surface.1"
            size="100%"
            borderRadius="3"
            flexContainer
            flexDirection="column"
            gap="8"
            paddingX="8"
            borderY="solid var(--size-4) var(--surface-1)"
            boxShadow="4"
            overflowY="auto"
          >
            {[
              'Developing Browser Extensions with Next.js',
              'Hyper Terminal and its arsenal of plugins',
              'Local State with NgRx & Apollo Angular',
            ].map((title) => (
              <Card
                key={title}
                title={title}
                subTitle="April 19th, 2022"
                tags={['Angular', 'Next.js', 'Supabase']}
                content="Browser extensions are fantastic tools for enhancing web development and general
                productivity. Lets find out how to create one while leveraging the power of
                Next.js!"
                actions={[
                  <Box key={title + 'read more'} flexContainer gap="2">
                    <Text fontSize="2">Read More</Text>
                    <ArrowRightIcon
                      width={25}
                      height={25}
                      fill="var(--brand-1)"
                    />
                  </Box>,
                ]}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
