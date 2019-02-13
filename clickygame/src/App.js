//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FishCard from "./components/FishCard";
import Footer from "./components/Footer";
import fish from "./fish.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    fish,
    clickedFish: [],
    score: 0
  };

  //when you click on a card ... the fish is taken out of the array
  imageClick = event => {
    const currentFish = event.target.alt;
    const FishAlreadyClicked = this.state.clickedFish.indexOf(currentFish) > -1;

    //if you click on a fish that has already been selected, the game is reset and cards reordered
    if (FishAlreadyClicked) {
      this.setState({
        fish: this.state.fish.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedFish: [],
        score: 0
      });
      alert("Not bad, cod do better…Play again?");

      // You’re not quite up to scale.
      // Salmon had to say it.
      // Sorry, my attempt at a joke was a pile of carp.

      //if you click on an available fish, your score is increased and cards reordered
    } else {
      this.setState(
        {
          fish: this.state.fish.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedFish: this.state.clickedFish.concat(currentFish),
          score: this.state.score + 1
        },
        //if you get all 12 fish corrent you get a congrats message and the game resets
        () => {
          if (this.state.score === 12) {
            alert("Fin-tastic! You Won!");
            this.setState({
              fish: this.state.fish.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedFish: [],
              score: 0
            });
          }
        }
      );
    }
  };

  //the order of components to be rendered: navbar, jumbotron, Fishcard, footer
  render() {
    return (
      <div>
        <Navbar score={this.state.score} />
        <Jumbotron />
        <div className="wrapper">
          {this.state.fish.map(fish => (
            <FishCard
              imageClick={this.imageClick}
              id={fish.id}
              key={fish.id}
              image={fish.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
