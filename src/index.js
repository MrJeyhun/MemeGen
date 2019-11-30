import React from "react";
import ReactDOM from "react-dom";
import App from "./CapstoneProject/CapstoneApp";
ReactDOM.render(<App />, document.getElementById("root"));

// import App from "./forms/AppTravel";
// import App from "./classBased/App05";
// import AppToDo from "./components/AppToDo";
// import Page from "./components/Page";
//render to html

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header username={"Ceka"} />
//         <Greeting />
//       </div>
//     );
//   }
// }

// class Header extends Component {
//   render() {
//     return (
//       <header>
//         <p>Welcome, {this.props.username}</p>
//       </header>
//     );
//   }
// }

// class Greeting extends Component {
//   render() {
//     const date = new Date();
//     const hours = date.getHours();
//     let timeOfDay;

//     if (hours < 12) {
//       timeOfDay = "morning";
//     } else if (hours > 12 && hours < 17) {
//       timeOfDay = "afternoon";
//     } else {
//       timeOfDay = "night";
//     }

//     return <p>Good {timeOfDay} to you sir or madam!</p>;
//   }
// }
ReactDOM.render(<App />, document.getElementById("root"));
