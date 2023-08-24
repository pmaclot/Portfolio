import React from 'react';

// Externals
import { Button, Flex } from 'theme-ui';

interface ProjectorProps {
  toggleProjectorZoomed: () => void;
}

const Projector: React.FC<ProjectorProps> = ({ toggleProjectorZoomed }) => {
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
      <h3 style={{ marginBottom: 10 }}>Coming soon.</h3>
      <Button
        onClick={toggleProjectorZoomed}
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

export default Projector;
