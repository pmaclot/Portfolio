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
      <Link onClick={toggleProjectorZoomed} sx={{ color: 'primary', cursor: 'pointer' }}>
        Portfolio.
      </Link>
      <Link onClick={toggleScreenZoomed} sx={{ color: 'primary', cursor: 'pointer' }}>
        Experience.
      </Link>
    </Flex>
  );
};

export default Footer;
