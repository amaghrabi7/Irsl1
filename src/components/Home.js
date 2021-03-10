import React from "react";

// Images
import main from "../main.jpg";

// Styling
import styles from "../styles";

const Home = () => {
    return (
    <div>
        <h1 style={styles.text}>Irsl</h1>
        <h4 style={styles.text}>Ship Swiftly & Safely Throughout the Kingdom!</h4>
        <img
          alt="irsl shop"
          src={main} 
          style={styles.shopImage}
        />
      </div>
    )};

export default Home;