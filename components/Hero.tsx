import { Box } from './Box';
import { Button } from './Button';
import { Line } from './Line';
import { Text } from './Text';

export const Hero = () => {
  return (
    <>
      <Text as="h1" fontSizeFluid="8">
        Hi, I&apos;m Christian.
      </Text>
      <Text as="h3" color="text.2" fontSizeFluid="5">
        Front-End Web Developer
      </Text>
      <Line size="7" />
      <Text as="p" fontSize="4" fontWeight="6">
        Developing for the web since 2015, based in Pittsburgh PA. A few areas I
        tend to focus on include developer experience tooling, responsive web
        design, and occasionally some attempts at teaching.
      </Text>
      <Box marginTop="9">
        <Button variant="cta" aria-label="Open contact form.">
          Contact
        </Button>
      </Box>
    </>
  );
};
