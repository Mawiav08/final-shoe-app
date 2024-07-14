import React from 'react';
import './styles.css';

const Checkout = () => {
  // Functionality for checkout process can be added here

  return (
    <div>
      <h2>Checkout</h2>
      <p>Fill in your details to complete the purchase.</p>
      {/* Example form fields (replace with actual checkout form) */}
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />

        <label htmlFor="address">Address:</label>
        <textarea id="address" rows="4" required></textarea>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
