import React from 'react';

// Externals
import type { HeadFC, PageProps } from 'gatsby';
import { Flex, Heading, Text } from 'theme-ui';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Flex
      sx={{ alignItems: 'center', flexDirection: 'column', justifyContent: 'center', height: '100vh', width: '100vw' }}
    >
      <Heading as="h1">404</Heading>
      <Text as="p">Page not found.</Text>
    </Flex>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
