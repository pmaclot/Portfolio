import React, { useLayoutEffect } from 'react';

const Spotify: React.FC = () => {
  useLayoutEffect(() => {
    const element = document.querySelector('[aria-label="Play"]') as HTMLButtonElement;

    if (element) element.click();
  }, []);

  return (
    <iframe
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      frameBorder="0"
      height={152}
      loading="lazy"
      src="https://open.spotify.com/embed/playlist/37i9dQZF1EpptnkkxrqhrO?utm_source=generator"
      style={{ borderRadius: '12px' }}
      title="Spotify Playlist"
      width="100%"
    />
  );
};

export default Spotify;
