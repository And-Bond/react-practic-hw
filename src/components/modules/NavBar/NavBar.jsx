import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/'>Products</NavLink>
      <NavLink to='/basket'>Basket</NavLink>
    </nav>
  );
};

export default NavBar
