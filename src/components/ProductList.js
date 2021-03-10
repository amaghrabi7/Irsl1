import React from "react";

// Components
import ProductItem from "./ProductItem";

// Styling
import styles from "../styles";

// Data
import products from "../products";

const ProductList = () => {
  const productList = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return productList;
};

export default ProductList;
