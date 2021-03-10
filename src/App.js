import React from "react";

// Components
import Home from "./components/Home";
import ProductList from "./components/ProductList";

// Data
import products from "./products";


// Styling
import styles from "./styles";

function App() {
  return (
    <div>
      <Home />
      <ProductList />
    </div>
  );
}

export default App;
