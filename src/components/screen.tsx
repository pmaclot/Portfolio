import React from 'react';

// Externals
import { Button, Flex } from 'theme-ui';

interface ScreenProps {
  toggleScreenZoomed: () => void;
}

const Screen: React.FC<ScreenProps> = ({ toggleScreenZoomed }) => {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
      }}
    >
      <h3>Coming soon.</h3>
      <Button
        onClick={toggleScreenZoomed}
        sx={{
          bg: 'var(--theme-ui-colors-primary)',
          color: 'var(--theme-ui-colors-background)',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          lineHeight: 'inherit'
        }}
      >
        Back
      </Button>
    </Flex>
  );
};

export default Screen;
