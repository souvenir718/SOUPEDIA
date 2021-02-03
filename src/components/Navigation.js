import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
function Navigation() {
    return (
        <div className="header">
            <Link to="/">
                <img src={`${process.env.PUBLIC_URL}/logo2.png`} alt="logo" title="logo" className="header__logo" />
            </Link>
            <a href="https://souvenir718.github.io/">
                <img src={`${process.env.PUBLIC_URL}/portfolio.png`} alt="logo" title="portfolio page" className="header__portfolio" />
            </a>
            <a href="https://github.com/souvenir718">
                <img src={`${process.env.PUBLIC_URL}/github.jpg`} alt="logo" title="souvenir github" className="header__github" />
            </a>
            {/* <Link to="/about">About</Link> */}
        </div>
    );
}
export default Navigation;
