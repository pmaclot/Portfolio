import React from 'react';

interface RoomContextState {
  phoneZoomed: boolean;
  projectorZoomed: boolean;
  screenZoomed: boolean;
  spotifyPlayer: boolean;
  togglePhoneZoomed: () => void;
  toggleProjectorZoomed: () => void;
  toggleScreenZoomed: () => void;
  toggleSpotifyPlayer: () => void;
}

const defaultState: RoomContextState = {
  phoneZoomed: false,
  projectorZoomed: false,
  screenZoomed: false,
  spotifyPlayer: false,
  togglePhoneZoomed: () => {},
  toggleProjectorZoomed: () => {},
  toggleScreenZoomed: () => {},
  toggleSpotifyPlayer: () => {}
};

const RoomContext = React.createContext(defaultState);

class RoomProvider extends React.Component<{ children: React.ReactNode }> {
  state = {
    phoneZoomed: false,
    projectorZoomed: false,
    screenZoomed: false,
    spotifyPlayer: false
  };

  togglePhoneZoomed = () => {
    let phoneZoomed = !this.state.phoneZoomed;
    let projectorZoomed = false;
    let screenZoomed = false;
    let spotifyPlayer = false;

    this.setState({ phoneZoomed, projectorZoomed, screenZoomed, spotifyPlayer });
  };

  toggleProjectorZoomed = () => {
    let phoneZoomed = false;
    let projectorZoomed = !this.state.projectorZoomed;
    let screenZoomed = false;
    let spotifyPlayer = false;

    this.setState({ phoneZoomed, projectorZoomed, screenZoomed, spotifyPlayer });
  };

  toggleScreenZoomed = () => {
    let phoneZoomed = false;
    let projectorZoomed = false;
    let screenZoomed = !this.state.screenZoomed;
    let spotifyPlayer = false;

    this.setState({ phoneZoomed, projectorZoomed, screenZoomed, spotifyPlayer });
  };

  toggleSpotifyPlayer = () => {
    let phoneZoomed = false;
    let projectorZoomed = false;
    let screenZoomed = false;
    let spotifyPlayer = !this.state.spotifyPlayer;

    this.setState({ phoneZoomed, projectorZoomed, screenZoomed, spotifyPlayer });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          phoneZoomed: this.state.phoneZoomed,
          projectorZoomed: this.state.projectorZoomed,
          screenZoomed: this.state.screenZoomed,
          spotifyPlayer: this.state.spotifyPlayer,
          togglePhoneZoomed: this.togglePhoneZoomed,
          toggleProjectorZoomed: this.toggleProjectorZoomed,
          toggleScreenZoomed: this.toggleScreenZoomed,
          toggleSpotifyPlayer: this.toggleSpotifyPlayer
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export default RoomContext;

export { RoomProvider };
