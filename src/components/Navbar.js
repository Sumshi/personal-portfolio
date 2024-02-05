// This page will contain the logo and nav elements, these elements are common across all pages
import React from 'react'
import { Link } from 'react-router-dom';// used for links just a tags in html
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='toggleButton'>
            <button></button>
        </div>

        <div className='links'>
            <Link to='/'> Home </Link>
            <Link to='/projects'> Projects </Link>
            <Link to='/experience'> Experience </Link>
        </div>
    </div>
  );
}

export default Navbar;
