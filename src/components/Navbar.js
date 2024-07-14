import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/womens">Women's Shoes</Link></li>
        <li><Link to="/mens">Men's Shoes</Link></li>
        <li><Link to="/kids">Kids' Shoes</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
