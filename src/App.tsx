import React, { useCallback, useLayoutEffect, useState } from 'react';

// Externals
import { animated, useTransition } from '@react-spring/web';
import PropTypes from 'prop-types';
import { Box, useThemeUI } from 'theme-ui';

// Screens
import SplashScreen from './screens/splashscreen';

// Suppress useLayoutEffect warnings when running outside a browser
if (typeof window === 'undefined') React.useLayoutEffect = React.useEffect;

interface AppProps {
  children: React.ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  const { theme } = useThemeUI();

  // TODO: Only when path is "/" and history is empty (new visit)
  const [loading, setLoading] = useState<boolean>(false);

  const transitionSplashscreen = useTransition(loading, {
    from: { opacity: '1' },
    enter: { delay: 0, opacity: '1' },
    leave: { delay: 500, opacity: '0' },
    onRest: () => {
      // Show body scrollbar
      document.body.style.overflow = 'auto';
    }
  });

  const onReady = useCallback((): void => {
    setLoading(false);
  }, []);

  useLayoutEffect(() => {
    // Hide body scrollbar
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <React.Fragment>
      {transitionSplashscreen(
        (style, item) =>
          item && (
            <animated.div
              style={{
                background: theme.colors?.background!.toString(),
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                height: '100vh',
                width: '100vw',
                zIndex: 9999,
                ...style
              }}
            >
              <SplashScreen onReady={onReady} />
            </animated.div>
          )
      )}
      <Box sx={{ display: loading ? 'none' : 'block' }}>{children}</Box>
    </React.Fragment>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
