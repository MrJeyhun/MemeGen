import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    let status;
    if (this.state.isLoggedIn) {
      status = "in";
    } else {
      status = "out";
    }
    return (
      <div>
        <p>You are logged {status}</p>
      </div>
    );
  }
}

export default App;
