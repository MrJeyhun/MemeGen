import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";

let App01 = () => {
  const jokesComponents = jokesData.map(item => (
    <Joke key={item.id} joke={item} />
  ));

  return <div className="jokes">{jokesComponents}</div>;
};

export default App01;
