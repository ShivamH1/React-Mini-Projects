import React from "react";
import "../styles/card.css";

function Card({ item, handleClick }) {
  const { img, title, author, price } = item;

  return (
    <div className="cards">
      <div className="image-box">
        <img src={img} alt="Image" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price- {price} INR</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;
