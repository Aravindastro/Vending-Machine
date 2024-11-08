import React, { useState } from 'react';
import Header from './Header';
import Product from './Product';
import Cart from './Cart';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const products = [
    { id: 0, title: 'Product 1', price: 120, image: 'image/img1.jpg' },
    { id: 1, title: 'Product 2', price: 60, image: 'image/img2.jpg' },
    { id: 2, title: 'Product 3', price: 230, image: 'image/img3.jpg' },
    { id: 3, title: 'Product 4', price: 100, image: 'image/img4.jpg' },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setTotal((prevTotal) => prevTotal + product.price);
  };

  const updateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map(item =>
          item.id === productId ? { ...item, quantity: Math.max(item.quantity + delta, 0) } : item
        )
        .filter(item => item.quantity > 0)
    );
    const product = products.find(p => p.id === productId);
    setTotal((prevTotal) => Math.max(prevTotal + product.price * delta, 0));
  };

  const openQRPage = () => {
    alert('Redirecting to QR Payment Page...');
  };

  return (
    <div className="App">
      <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <div className="container">
        <div className="products">
          {products.map(product => (
            <Product
              key={product.id}
              product={product}
              addToCart={() => addToCart(product)}
              updateQuantity={updateQuantity}
            />
          ))}
        </div>
        <Cart cart={cart} total={total} openQRPage={openQRPage} />
      </div>
    </div>
  );
};

export default App;
