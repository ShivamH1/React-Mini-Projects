import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Shop from "./components/Shop";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    // console.log(item);
    let isPresent = false;
    cart.forEach((element) => {
      if (item.id == element.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      alert("Item already exists in the cart");
    } else {
      setCart([...cart, item]);
    }
  };

  return (
    <div>
      <Navbar size={cart.length} />
      <Shop handleClick={handleClick} />
    </div>
  );
}

export default App;
