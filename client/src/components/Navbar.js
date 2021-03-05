import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>Query Guests</div>
      <ul>
        <li>
          <NavLink exact to='/' activeClassName='active'>
            Guest List
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/create' activeClassName='active'>
            Add New Guest
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
