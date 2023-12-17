import React from 'react';

const ShoppingCart = ({ cart, onRemoveFromCart, onClearCart }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)}
                <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={onClearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
