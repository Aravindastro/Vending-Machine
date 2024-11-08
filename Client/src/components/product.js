import React from 'react';

const Product = ({ product, addToCart, updateQuantity }) => {
  return (
    <div className="box">
      <div className="img-box">
        <img className="images" src={product.image} alt={product.title} />
      </div>
      <div className="bottom">
        <p>{product.title}</p>
        <h2>₹ {product.price}.00</h2>
        <button onClick={addToCart}>Add to cart</button>
        <div className="counter">
          <button onClick={() => updateQuantity(product.id, -1)}>-</button>
          <span>{product.quantity || 0}</span>
          <button onClick={() => updateQuantity(product.id, 1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
