import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './header.css'
const Header = () => {
    const { user, singout } = useAuth();
    return (
        <div className='p-3 my-1 head' >
            <NavLink className='header' to="/home">Home</NavLink>
            <NavLink className='header' to="/service">Service</NavLink>
            <NavLink className='header' to="/about">About us</NavLink>
            <NavLink className='header' to="/contract">Contract</NavLink>
            
            {
                user?.email ?<>
                    <button onClick={singout}>logout</button>
                   { user?.displayName}

                </>: <> 
                <NavLink className='header' to="/login">Login</NavLink>
            <NavLink className='header' to="/registation">Registation</NavLink>
                </>
            }
           
            {/* <span>{user.displayName} </span>
            {user?.email && <button onClick={logout}>log out</button>} */}
        </div>
    );
};

export default Header;