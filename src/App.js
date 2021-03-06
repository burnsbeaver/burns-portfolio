import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Jumbotron from './components/Jumbotron'
import Projects from './components/Projects'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Jumbotron />
        <Projects />
      </div>
    );
  }
}

export default App;
