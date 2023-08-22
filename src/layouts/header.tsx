import React, { useContext } from 'react';

// Contexts
import RoomContext from '../context/room';

// Externals
import { navigate } from 'gatsby';
import { Flex, Link } from 'theme-ui';
import type { ThemeUIStyleObject } from 'theme-ui';

interface HeaderProps {
  sx?: ThemeUIStyleObject;
}

const Header: React.FC<HeaderProps> = ({ sx }) => {
  const { togglePhoneZoomed } = useContext(RoomContext);

  return (
    <Flex
      px={4}
      sx={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', minHeight: '72px', ...sx }}
    >
      <Link as="h2" onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
        Pierre Maclot
      </Link>
      <Link as="p" onClick={togglePhoneZoomed} sx={{ cursor: 'pointer' }}>
        Say hi.
      </Link>
    </Flex>
  );
};

export default Header;
