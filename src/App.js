import './App.css';
import React, { Component } from 'react';
import Timer from './Timer'

class App extends Component {

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <Timer></Timer>
      </header>
    </div>
    );
  };
}

export default App;
