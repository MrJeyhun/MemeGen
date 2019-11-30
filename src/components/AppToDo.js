import React from "react";
import ToDo from "./todo";
import todosData from "./todosData";

const AppToDo = () => {
  const todosComponent = todosData.map(item => (
    <ToDo key={item.id} todo={item} />
  ));

  return <div className="todo-list">{todosComponent}</div>;
};

export default AppToDo;
