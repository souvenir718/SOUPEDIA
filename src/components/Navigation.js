import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
function Navigation() {
    return (
        <div className="header">
            <span className="header__souvenir">souvenir</span>
            <span className="header__pedia">PEDIA</span>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}
export default Navigation;
