import React, { Component } from 'react';

class Projects extends Component {
  render(){
    return(
      <div>
        <h1>Projects</h1>
        <div className="projects">
          <div>
            <a target="_blank" href="http://burns-blackjack.bitballoon.com/">BlackJack</a>
            <p>Front-End application, built using HTML, CSS, and JavaScript</p>
          </div>
          <div>
            <a target="_blank" href="https://vinyl-tracker.herokuapp.com/ ">Vinyl-Tracker</a>
            <p>Full-Stack application, using MongoDB, Express.js, Node.js, and ReactJS</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
