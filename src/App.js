import React, { Component } from "react";
import Pic from "./components/Pic";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Message from "./components/Message";
import pics from "./pics.json";
import "./App.css";


class App extends Component {
  // Setting this.state.pics to the pics json array
  state = {
    pics,
    // clicked,
    score: 0,
    topScore: 0,
    result: 'win'
  };
  picsClicked = [];
  clickResult = '';
  clickWinMessages = ["Good clicking!", 'Great job!', 'Sweet!', 'Nice one!', 'Schwing!', 'Boom!', "That's it!", 'Huzzah!', 'There it is!', 'Do that again!', 'Memory master!', 'Bingo!'];

  shuffleIndexes = array => {
    const pics = array;
    let currentIndex = pics.length, temporaryValue, randomIndex;
console.log('currentIndex', currentIndex);
    // While there are elements to shuffle...
    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = pics[currentIndex];
      pics[currentIndex] = pics[randomIndex];
      pics[randomIndex] = temporaryValue;
    };
    this.setState({ pics });
  };

  recordScore = id => {
    // if the clicked pic was clicked before...
    if (this.picsClicked.includes(id)) {
      this.clickResult = 'Sorry, you clicked that one already.';
      this.setState({
        score: 0,
        result: 'fail'
      });
      if (this.picsClicked.length > this.state.topScore) {
        this.setState({ topScore: this.picsClicked.length });
      }
      this.picsClicked = [];
    }
    // if the clicked pic wasn't clicked before...
    else {
      let random = Math.floor(Math.random() * this.clickWinMessages.length);
      this.clickResult = `${this.clickWinMessages[random]} +1`;
console.log('click: win');
      let score = this.state.score;
console.log('score', score);
      let newScore = score + 1;
      if (newScore === 12) {
        this.clickResult = "Amazing, you just got a perfect score!";
        this.picsClicked.push(id);
        this.setState({
          score: newScore,
          result: 'perfect'
         })
         this.setState({ topScore: this.picsClicked.length });
         this.picsClicked = [];
      }
      else {
        this.picsClicked.push(id);
        this.setState({
          score: newScore,
          result: 'win'
         })
      }
    };
  };

  // Map over this.state.pics and render a Pic component for each picture
  render() {
    return (

      <Wrapper>
        <Title
          main="Click-A-Pic"
          sub="Click a pic to score; click the same one twice and game over!"
          score={`Score: ${this.state.score} | Top Score:${this.state.topScore}`}
        />
        <Message
          message={this.clickResult}
          result={this.state.result}
        />
        {this.state.pics.map(pic => (
          <Pic
            pics = {this.state.pics}
            score={this.recordScore}
            shuffle={this.shuffleIndexes}
            id={pic.id}
            key={pic.id}
            image={pic.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
