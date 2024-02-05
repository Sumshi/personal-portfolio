// This page will contain the logo and nav elements, these elements are common across all pages
import React from 'react'
import { Link, useLocation } from 'react-router-dom';// used for links just a tags in html
import '../styles/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react'

/* react location api is used to get the current location of the page, eg
if menu icon is open on changing location it should close, so we use this api to get the current location and close the menu icon if open
*/

function Navbar() {
const [openLinks, setOpenLinks] = useState(false)

const location = useLocation();
  useEffect(() => {
    setOpenLinks(false);
  }, [location]);
  // function to toggle the menu icon

const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }
  return (
    <div className='navbar' id={openLinks ? "open" : "close"}>
        <div className='toggleButton'>
        <button onClick={toggleNavbar}>
          <MenuIcon />
        </button>
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
