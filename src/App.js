import React, { Component } from 'react';
import Timer from './components/Timer'
import CustomNotification from './components/CustomNotification'
import NavigationBar from './components/NavigationBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  render() {
    return (
      <div>
      <header>
        <CustomNotification text="Hello World" show={false}></CustomNotification>
      </header>
      <NavigationBar></NavigationBar>
      <Timer name="Focus Time"></Timer>
    </div>
    );
  };
}

export default App;
