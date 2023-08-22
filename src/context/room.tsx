import React from 'react';

interface RoomContextState {
  phoneZoomed: boolean;
  projectorZoomed: boolean;
  screenZoomed: boolean;
  togglePhoneZoomed: () => void;
  toggleProjectorZoomed: () => void;
  toggleScreenZoomed: () => void;
}

const defaultState: RoomContextState = {
  phoneZoomed: false,
  projectorZoomed: false,
  screenZoomed: false,
  togglePhoneZoomed: () => {},
  toggleProjectorZoomed: () => {},
  toggleScreenZoomed: () => {}
};

const RoomContext = React.createContext(defaultState);

class RoomProvider extends React.Component<{ children: React.ReactNode }> {
  state = {
    phoneZoomed: false,
    projectorZoomed: false,
    screenZoomed: false
  };

  togglePhoneZoomed = () => {
    let phoneZoomed = !this.state.phoneZoomed;

    this.setState({ phoneZoomed });
  };

  toggleProjectorZoomed = () => {
    let projectorZoomed = !this.state.projectorZoomed;

    this.setState({ projectorZoomed });
  };

  toggleScreenZoomed = () => {
    let screenZoomed = !this.state.screenZoomed;

    this.setState({ screenZoomed });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          phoneZoomed: this.state.phoneZoomed,
          projectorZoomed: this.state.projectorZoomed,
          screenZoomed: this.state.screenZoomed,
          togglePhoneZoomed: this.togglePhoneZoomed,
          toggleProjectorZoomed: this.toggleProjectorZoomed,
          toggleScreenZoomed: this.toggleScreenZoomed
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export default RoomContext;

export { RoomProvider };
