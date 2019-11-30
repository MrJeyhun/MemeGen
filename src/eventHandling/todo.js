import React from "react";

const ToDo = props => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChange(props.todo.id)}
      />
      <p>{props.todo.placeholder}</p>
    </div>
  );
};

export default ToDo;
