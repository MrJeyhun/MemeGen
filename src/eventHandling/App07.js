import React from "react";

const App = () => {
  return (
    <div>
      <img src="https://www.fillmurray.com/200/100" alt="shit" />
      <br />
      <br />
      <button onClick={btnClick}>Click me</button>
    </div>
  );
};

const btnClick = () => {
  console.log("clickeddddd");
};

export default App;
