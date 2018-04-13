import React, { Component } from "react";
import Pic from "./components/Pic";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    score: 0,
    topScore: 0
  };



  shuffleIndexes = array => {
    const friends = array;
    let currentIndex = friends.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = friends[currentIndex];
      friends[currentIndex] = friends[randomIndex];
      friends[randomIndex] = temporaryValue;
    }


    this.setState({ friends: friends });

  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (

      <Wrapper>
        <Title
          main="Click-A-Pic"
          sub="Click a pic to score; click the same one twice and you lose!"
          score={`Score: ${this.state.score} | Top Score:${this.state.topScore}`}
        />
        {this.state.friends.map(friend => (
          <Pic
            friends = {this.state.friends}
            shuffle={this.shuffleIndexes}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
