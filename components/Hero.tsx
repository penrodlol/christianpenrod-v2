import { Box } from './Box';
import { Button } from './Button';
import { Line } from './Line';
import { Text } from './Text';

export const Hero = () => {
  return (
    <Box maxWidth="max-content">
      <Text as="h1" fontSize="fluid.8">
        Hi, I&apos;m Christian.
      </Text>
      <Text as="h3" color="text.2" fontSize="fluid.5">
        Front-End Web Developer
      </Text>
      <Line space="7" />
      <Text as="p" fontSize="fluid.3" fontWeight="6" contentWidth="2">
        Developing for the web since 2015, based in Pittsburgh PA. A few areas I
        tend to focus on include developer experience tooling, responsive web
        design, and occasionally some attempts at teaching.
      </Text>
      <Box marginTop="fluid.6" maxWidth={{ _: '100%', md: 'max-content' }}>
        <Button variant="cta" aria-label="Open contact form" width="100%">
          Contact
        </Button>
      </Box>
    </Box>
  );
};
