import React, { Component } from "react";
import todosData from "./todosData";
import ToDo from "./todo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }

  render() {
    const todosComponents = this.state.todos.map(item => (
      <ToDo key={item.id} todo={item} />
    ));

    return <div className="todo-list">{todosComponents}</div>;
  }
}

export default App;
