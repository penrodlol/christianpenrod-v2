import { FC, ReactNode } from 'react';
import { Box } from './Box';
import { Line } from './Line';
import { Text } from './Text';

export interface CardProps {
  title: string;
  subTitle?: string;
  content: string;
  tags: Array<string>;
  actions: Array<ReactNode>;
}

export const Card: FC<CardProps> = (props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      bg="surface.2"
      paddingX="6"
      paddingY="4"
      borderRadius="3"
      boxShadow="4"
    >
      <Box display="flex" gap="2" flexWrap="wrap" marginBottom="2">
        {props.tags.map((tag) => (
          <Box
            key={tag}
            bg="accent.2"
            color="surface.1"
            borderRadius="round"
            paddingX="2"
          >
            <Text letterSpacing="2" fontSize="0.9rem" color="black">
              {tag}
            </Text>
          </Box>
        ))}
      </Box>
      <Text fontSize="3">{props.title}</Text>
      {props.subTitle && (
        <Text color="text.2" fontSize="2" fontWeight="6">
          {props.subTitle}
        </Text>
      )}
      <Line />
      <Text as="p" fontSize="1" lineHeight="4">
        {props.content}
      </Text>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="end"
        paddingTop="4"
        marginTop="auto"
      >
        {props.actions}
      </Box>
    </Box>
  );
};
