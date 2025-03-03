import React from 'react';

class KeyPress extends React.Component {
  state = {
    lastPressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ lastPressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.lastPressedKey
            ? `The last pressed key is [${this.state.lastPressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

export const App: React.FC = () => {
  return (
    <div>
      <KeyPress />
    </div>
  );
};
