import React, { useContext } from 'react';
import { CartContext } from './CartContext'; 
import './styles.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>Price: ${typeof item.price === 'number' ? item.price.toFixed(2) : 'N/A'}</div>
            {/* Add button to remove item */}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {/* Calculate total */}
      <div>Total: {cartItems.reduce((acc, item) => {
        const price = typeof item.price === 'number' ? item.price : 0;
        return acc + price;
      }, 0).toFixed(2)}</div>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
