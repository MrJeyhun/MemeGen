import React from "react";
import Product from "./Product";
import products from "./productData";

const App02 = () => {
  const productComponents = products.map(item => (
    <Product key={item.id} product={item} />
  ));

  return <div>{productComponents}</div>;
};

export default App02;
