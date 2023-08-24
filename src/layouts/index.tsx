import React from 'react';

// Components
import Footer from './footer';
import Header from './header';

// Externals
import PropTypes from 'prop-types';
import { Box } from 'theme-ui';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
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
    <Footer sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 200 }} />
  </Box>
);

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
