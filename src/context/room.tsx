import React from 'react';

interface RoomContextState {
  pacManGame: boolean;
  phoneZoomed: boolean;
  projectorZoomed: boolean;
  screenZoomed: boolean;
  spotifyPlayer: boolean;
  togglePacManGame: () => void;
  togglePhoneZoomed: () => void;
  toggleProjectorZoomed: () => void;
  toggleScreenZoomed: () => void;
  toggleSpotifyPlayer: () => void;
}

const defaultState: RoomContextState = {
  pacManGame: false,
  phoneZoomed: false,
  projectorZoomed: false,
  screenZoomed: false,
  spotifyPlayer: false,
  togglePacManGame: () => {},
  togglePhoneZoomed: () => {},
  toggleProjectorZoomed: () => {},
  toggleScreenZoomed: () => {},
  toggleSpotifyPlayer: () => {}
};

const RoomContext = React.createContext(defaultState);

class RoomProvider extends React.Component<{ children: React.ReactNode }> {
  state = {
    pacManGame: false,
    phoneZoomed: false,
    projectorZoomed: false,
    screenZoomed: false,
    spotifyPlayer: false
  };

  togglePacManGame = () => {
    let pacManGame = !this.state.pacManGame;
    let phoneZoomed = false;
    let projectorZoomed = !this.state.projectorZoomed;
    let screenZoomed = false;
    let spotifyPlayer = false;

    this.setState({ pacManGame, phoneZoomed, projectorZoomed, screenZoomed, spotifyPlayer });
  };

  togglePhoneZoomed = () => {
    let pacManGame = false;
    let phoneZoomed = !this.state.phoneZoomed;
    let projectorZoomed = false;
    let screenZoomed = false;
    let spotifyPlayer = false;

    this.setState({ pacManGame, phoneZoomed, projectorZoomed, screenZoomed, spotifyPlayer });
  };

  toggleProjectorZoomed = () => {
    let pacManGame = false;
    let phoneZoomed = false;
    let projectorZoomed = !this.state.projectorZoomed;
    let screenZoomed = false;
    let spotifyPlayer = false;

    this.setState({ pacManGame, phoneZoomed, projectorZoomed, screenZoomed, spotifyPlayer });
  };

  toggleScreenZoomed = () => {
    let pacManGame = false;
    let phoneZoomed = false;
    let projectorZoomed = false;
    let screenZoomed = !this.state.screenZoomed;
    let spotifyPlayer = false;

    this.setState({ pacManGame, phoneZoomed, projectorZoomed, screenZoomed, spotifyPlayer });
  };

  toggleSpotifyPlayer = () => {
    let pacManGame = false;
    let phoneZoomed = false;
    let projectorZoomed = false;
    let screenZoomed = false;
    let spotifyPlayer = !this.state.spotifyPlayer;

    this.setState({ pacManGame, phoneZoomed, projectorZoomed, screenZoomed, spotifyPlayer });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          pacManGame: this.state.pacManGame,
          phoneZoomed: this.state.phoneZoomed,
          projectorZoomed: this.state.projectorZoomed,
          screenZoomed: this.state.screenZoomed,
          spotifyPlayer: this.state.spotifyPlayer,
          togglePacManGame: this.togglePacManGame,
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
