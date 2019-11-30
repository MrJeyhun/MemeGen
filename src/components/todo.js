import React from "react";

const ToDo = props => {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.todo.completed} />
      <p>{props.todo.placeholder}</p>
    </div>
  );
};

export default ToDo;
