import React, { Component } from 'react';

class NavBar extends Component {
  render(){
    return(
      <div className="navbar">
        <h2>{'Burns Beaver {Web Developer}'}</h2>
        <button className="btn"><a href="#">About Me</a></button>
        <button className="btn"><a href="#">Skills</a></button>
        <button className="btn"><a href="#">Projects</a></button>
        <button className="btn"><a href="#">Contact</a></button>
      </div>
    )
  }
}

export default NavBar
