import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './header.css'
const Header = () => {
    const { user, singout } = useAuth();
    return (
        <div className='p-3 d-flex justify-content-center  my-1 head' >
            <div> <h3 className='text-white me-3'>APPLE HEALTH CARE</h3></div>
            <div>
            <NavLink className='header' to="/home">Home</NavLink>
            <NavLink className='header' to="/service">Service</NavLink>
            <NavLink className='header' to="/about">About us</NavLink>
            <NavLink className='header' to="/contract">Contract</NavLink>
            
            {
                user?.email ?<>
                    <button className='mx-3' onClick={singout}> logout</button>
                   { user?.displayName}

                </>: <> 
                <NavLink className='header' to="/login">Login</NavLink>
            <NavLink className='header' to="/registation">Registation</NavLink>
                </>
            }

            </div>
           
    
           
        </div>
    );
};

export default Header;