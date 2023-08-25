import React, { useContext } from 'react';

// Components
import Spotify from '../components/spotify';
import Footer from './footer';
import Header from './header';

// Context
import RoomContext from '../context/room';

// Externals
import PropTypes from 'prop-types';
import { Box } from 'theme-ui';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { spotifyPlayer } = useContext(RoomContext);

  return (
    <Box
      sx={{
        height: '100vh',
        // @ts-ignore
        // eslint-disable-next-line no-dupe-keys
        height: '100svh',
        width: '100vw',
        // @ts-ignore
        // eslint-disable-next-line no-dupe-keys
        width: '100svw'
      }}
    >
      <Header sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 200 }} />
      <Box sx={{ height: '100%', width: '100%', zIndex: 0 }}>{children}</Box>
      {spotifyPlayer && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 'calc(72px + 10%)',
            left: '50%',
            width: '70%',
            transform: 'translateX(-50%)',
            zIndex: 200
          }}
        >
          <Spotify />
        </Box>
      )}
      <Footer sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 200 }} />
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
