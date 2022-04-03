import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            {/* logo img */}
            <div className='logo-img'>
                <a href='/'><img src={logo}></img></a>
            </div>
            <div className='manue'>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/blog'>Blog</a>
                <a href='/reviews'>Reviews</a>
                <a href='/dashboard'>Dashboard</a>
            </div>
        </div>
    );
};

export default Header;