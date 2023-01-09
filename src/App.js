import './App.css';
import React, { Component } from 'react';
import Timer from './Timer'
import CustomNotification from './CustomNotification'

class App extends Component {

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <CustomNotification text="Hello World" show={false}></CustomNotification>
      </header>
      <Timer name="Focus Time"></Timer>
    </div>
    );
  };
}

export default App;
