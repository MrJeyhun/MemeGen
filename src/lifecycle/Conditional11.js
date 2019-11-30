import React from "react";

const Conditional11 = props => {
  return props.isLogged ? <h1>You logged in</h1> : <h1>You logged out</h1>;
};

export default Conditional11;
