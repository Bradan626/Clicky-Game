//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
      {/* <h2>Score: {this.props.score}</h2> */}
        <ul>
          <li className="itemLeft"></li>
          <li className="itemCenter">Flex Those Brain Mussels</li>
          <li className="itemRight">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
