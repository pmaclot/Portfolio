import React from 'react';

const Spotify: React.FC = () => {
  return (
    <iframe
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
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
