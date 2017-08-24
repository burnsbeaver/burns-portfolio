import React, { Component } from 'react';

class Jumbotron extends Component {
  constructor(){
    super()
    this.state = {
      words: []
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
  console.log(letter)
  var newState = {...this.state}
  setTimeout(function(){
    newState.words.push(letter)
    this.setState= {newState}
  }, time);
}

componentDidMount() {

}

  render(){
    var input = this.state.words.join('');
    this.typeIntro("TESTer")
    console.log(input)
    return (
      <div className="jumbotron-image">
        <span>{input}Burns Beaver, <br/> Full Stack Developer</span>
      </div>
    )
  }
}

export default Jumbotron
