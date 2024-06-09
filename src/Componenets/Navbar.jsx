import React from 'react';
import logo from "../assets/react.svg"

const Navbar = () => {
  return (
    <div className='header'>
      <img src={logo} alt='logo' className='logo'/>
    </div>
  );
}

export default Navbar;
