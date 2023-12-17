import React, { useState } from 'react';
import Product from './Product';
import ShoppingCart from './ShoppingCart';
import './App.css'; // Import a CSS file for styling

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product A', price: 19.99 },
    { id: 2, name: 'Product B', price: 29.99 },
    { id: 3, name: 'Product C', price: 39.99 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="app">
      <div className="products">
        <h2>Available Products</h2>
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      <ShoppingCart cart={cart} onRemoveFromCart={removeFromCart} onClearCart={clearCart} />
    </div>
  );
};

export default App;
