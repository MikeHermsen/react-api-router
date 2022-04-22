import React from 'react';
import { Link } from 'react-router-dom';
 
const Navbar = () => {

  return (
    <nav>
        <Link to="">Home</Link>
        <Link to="api_list">Api DATA</Link>        
    </nav>
  )

};

export default Navbar;