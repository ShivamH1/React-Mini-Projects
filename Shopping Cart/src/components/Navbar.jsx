import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/navbar.css";

export const Navbar = ({size}) => {
  return (
    <nav>
      <div className="nav-box">
        <span className="my-shop">Book Shop</span>
        <div className="cart">
          <span>
            <i className="fa-solid fa-cart-shopping" />
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};
