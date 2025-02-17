import React from 'react';

// Externals
// @ts-ignore
import Pacman from 'react-pacman';

import { Button, Flex } from 'theme-ui';

interface ProjectorProps {
  projectorZoomed: boolean;
  toggleProjectorZoomed: () => void;
}

const Projector: React.FC<ProjectorProps> = ({ projectorZoomed, toggleProjectorZoomed }) => {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        pointerEvents: !projectorZoomed ? 'none' : 'auto',
        height: '100%',
        width: '100%'
      }}
    >
      {/* <Pacman /> */}
      <h3>Coming soon.</h3>
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
