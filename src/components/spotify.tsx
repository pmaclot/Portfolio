import React, { useCallback, useState } from 'react';

// Externals
import { animated, config, useSpring } from '@react-spring/web';
import { Spinner } from 'theme-ui';

const Spotify: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const onLoad = useCallback((): void => {
    setLoading(false);
  }, []);

  const styles = useSpring({
    config: config.default,
    opacity: loading ? 1 : 0
  });

  return (
    <>
      <animated.div
        style={{
          position: 'absolute',
          alignItems: 'center',
          background: '#CD379E',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
          height: 152,
          width: '100%',
          ...styles
        }}
      >
        {loading && <Spinner />}
      </animated.div>
      <iframe
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        frameBorder={0}
        height={152}
        loading="lazy"
        onLoad={onLoad}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1EpptnkkxrqhrO?utm_source=generator"
        style={{ borderRadius: '12px' }}
        title="Spotify Playlist"
        width="100%"
      />
    </>
  );
};

export default Spotify;
