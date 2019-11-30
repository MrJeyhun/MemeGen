import React from "react";

let Joke = props => {
  return (
    <div className="joke">
      <h3 style={{ display: !props.joke.question && "none" }}>
        Question: {props.joke.question}
      </h3>
      {/* <br /> */}

      <h3 style={{ color: !props.joke.question && "red" }}>
        Punchline: {props.joke.punchline}
      </h3>
      <hr className="breakline" />
    </div>
  );
};

export default Joke;
