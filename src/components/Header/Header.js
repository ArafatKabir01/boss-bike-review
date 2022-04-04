import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            {/* logo img */}
            <div className='logo-img'>
                <Link to='/'><img src={logo}></img></Link>
            </div>
            <div className='manue'>
                <Link to='/'>Home</Link>
                <Link to='/Linkbout'>About</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/dashboard'>Dashboard</Link>
            </div>
        </div>
    );
};

export default Header;