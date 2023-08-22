import React, { useContext } from 'react';

// Contexts
import RoomContext from '../context/room';

// Externals
import { Flex, Link } from 'theme-ui';
import type { ThemeUIStyleObject } from 'theme-ui';

interface FooterProps {
  sx?: ThemeUIStyleObject;
}

const Footer: React.FC<FooterProps> = ({ sx }) => {
  const { toggleProjectorZoomed, toggleScreenZoomed } = useContext(RoomContext);

  return (
    <Flex
      px={4}
      sx={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', minHeight: '72px', ...sx }}
    >
      <Link as="p" onClick={toggleProjectorZoomed} sx={{ cursor: 'pointer' }}>
        Portfolio.
      </Link>
      <Link as="p" onClick={toggleScreenZoomed} sx={{ cursor: 'pointer' }}>
        Experience.
      </Link>
    </Flex>
  );
};

export default Footer;
