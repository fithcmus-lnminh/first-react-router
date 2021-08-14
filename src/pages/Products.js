import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="products/product1">Product 1</Link>
        </li>
        <li>
          <Link to="products/product2">Product 2</Link>
        </li>
        <li>
          <Link to="products/product3">Product 3</Link>
        </li>
      </ul>
    </section>
  );
};
//WHEN CLICK TO 1 PRODUCT -> DISPLAY BELOW THE PRODUCT LIST
export default Products;
