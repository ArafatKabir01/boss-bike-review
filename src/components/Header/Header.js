import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            {/* logo img */}
            <div className='logo-img'>
                <NavLink to='/'><img src={logo}></img></NavLink>
            </div>
            <div >
                <NavLink className={({isActive})=>isActive? 'active-manue' : 'manue'} to='/'>Home</NavLink>
                <NavLink className={({isActive})=>isActive? 'active-manue' : 'manue'}  to='/about'>About</NavLink>
                <NavLink className={({isActive})=>isActive? 'active-manue' : 'manue'}  to='/blog'>Blog</NavLink>
                <NavLink className={({isActive})=>isActive? 'active-manue' : 'manue'}  to='/reviews'>Reviews</NavLink>
                <NavLink className={({isActive})=>isActive? 'active-manue' : 'manue'}  to='/dashboard'>Dashboard</NavLink>
            </div>
        </div>
    );
};

export default Header;