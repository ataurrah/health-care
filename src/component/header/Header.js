import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <div >
            <NavLink className='header' to="/home">Home</NavLink>
            <NavLink className='header' to="/service">Service</NavLink>
            <NavLink className='header' to="/about">About us</NavLink>
            <NavLink className='header' to="/contract">Contract</NavLink>
        </div>
    );
};

export default Header;