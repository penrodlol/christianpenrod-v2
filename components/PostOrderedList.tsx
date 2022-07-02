import {
  Children,
  isValidElement,
  PropsWithChildren,
  ReactElement,
} from 'react';
import { Box } from './Box';
import { Text } from './Text';

export const PostOrderedList = ({ children }: PropsWithChildren<unknown>) => (
  <Box as="ol" display="flex" flexDirection="column" gap="2" padding="0">
    {Children.toArray(children)
      .filter(isValidElement)
      .map((child: ReactElement, index) => (
        <Box key={index} as="li" display="flex" gap="3" maxWidth="100%">
          <Text color="text.2">{index + 1}.</Text>
          <Text as="p">{child.props.children}</Text>
        </Box>
      ))}
  </Box>
);
