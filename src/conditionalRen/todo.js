import React from "react";

const ToDo = props => {
  const todoStyle = {
    color: "gray",
    textDecoration: "line-through"
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChange(props.todo.id)}
      />
      <p style={props.todo.completed ? todoStyle : null}>
        {props.todo.placeholder}
      </p>
    </div>
  );
};

export default ToDo;
