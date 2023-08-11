import React from 'react';

// Externals
import { Flex, Link } from 'theme-ui';
import type { ThemeUIStyleObject } from 'theme-ui';

interface FooterProps {
  sx?: ThemeUIStyleObject;
}

const Footer: React.FC<FooterProps> = ({ sx }) => {
  return (
    <Flex
      px={4}
      sx={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', minHeight: '72px', ...sx }}
    >
      <Link as="p" onClick={() => console.log('portfolio.')} sx={{ cursor: 'pointer' }}>
        Portfolio.
      </Link>
      <Link as="p" onClick={() => console.log('experience.')} sx={{ cursor: 'pointer' }}>
        Experience.
      </Link>
    </Flex>
  );
};

export default Footer;
