import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Importamos nuestro componente
import Contador from './Contador';

class App extends Component {
  render() {
    return (
      <div className="Intro">
        <div className="Intro-header">
          <img src={logo} className="Intro-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Intro-intro">
          {/*Incluimos nuestro componente*/}
          <Contador />
        </div>
      </div>
    );
  }
}

export default App;
