import React from 'react';

const Cart = ({ cart, total, openQRPage }) => {
  return (
    <div className="sidebar">
      <div className="head">
        <p>My Cart</p>
      </div>
      <div id="cartItem">
        {cart.length > 0 ? (
          cart.map(item => (
            <div key={item.id} className="cart-item">
              <p>{item.title} x {item.quantity}</p>
              <p>₹ {item.price * item.quantity}</p>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <div className="foot">
        <h3>Total</h3>
        <h2 id="total">₹ {total}.00</h2>
      </div>
      {cart.length > 0 && (
        <button id="payButton" className="pay-button" onClick={openQRPage}>
          Pay
        </button>
      )}
    </div>
  );
};

export default Cart;
