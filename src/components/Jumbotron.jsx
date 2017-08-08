import React, { Component } from 'react';

class Jumbotron extends Component {
  constructor(){
    super()
    this.state = {
      words: ''
    }
  }


typeIntro = function (input) {
    function random() {
      return (4 * (Math.random() * 200))
    }

    var name = input.split('');
    var timeoutEffect = 500;

    for (var i = 0; i < name.length; i++) {
      this.logLetter(name[i], timeoutEffect)
      timeoutEffect += random()
    }
}

logLetter = function (letter, time){
  var string = ""
  console.log(string)
  setTimeout(function(){
    this.string += letter
    this.setState= {words: this.string}
  }, time);
}

  render(){
    return (
      <div className="jumbotron-image">
        <span>{this.state.words}</span>
      </div>
    )
    this.typeIntro('TEST')
  }
}

export default Jumbotron
