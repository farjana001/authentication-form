import React from 'react';
import { Link } from 'react-router-dom';

const navbarStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '60px 0 0 25px'
}
const LinkStyle = {
    color: '#E7EAED',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '10px'
}
const Navbar = () => {
    return (
        <div style={navbarStyle}>
            <Link style={LinkStyle} to='/home'>Home</Link>
            <Link style={LinkStyle} to='/home'>Login</Link>
            <Link style={LinkStyle} to='/submit'>Submit</Link>
            <Link style={LinkStyle} to='#'>Sign Out</Link>
        </div>
    );
};

export default Navbar;