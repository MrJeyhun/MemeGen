import React, { Component } from "react";
import Conditional11 from "./Conditional11";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLogged: !prevState.isLogged
      };
    });
  }

  render() {
    const btntext = this.state.isLogged ? "Log Out" : "Log In";

    return (
      <div>
        <Conditional11 isLogged={this.state.isLogged} />
        <button onClick={this.handleClick}>{btntext}</button>
      </div>
    );
  }
}

export default App;
