import React from 'react';
import './css/nav.css'
import {Link} from 'react-router-dom'

function Nav() {
    const navStyle = {
        color: 'white'
    };
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style = {navStyle} to="/tablas">
                    <li>Tablas</li>
                </Link>
                <Link style = {navStyle} to="/proyecto">
                    <li>Proyecto</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
