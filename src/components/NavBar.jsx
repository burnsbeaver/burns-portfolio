import React, { Component } from 'react';

class NavBar extends Component {
  render(){
    return(
      <div className="navbar">
        <h2>Burns Beaver</h2>
        <a href="#">About Me</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    )
  }
}

export default NavBar
