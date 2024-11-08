// Header.js
import React from 'react';

const Header = ({ cartCount }) => {
  return (
    <div className="header">
      <p className="logo">PURCHASE</p>
      <div className="cart">
        <i className="fa-solid fa-cart-shopping"></i>
        <p id="count">{cartCount}</p>
      </div>
    </div>
  );
};

export default Header;
