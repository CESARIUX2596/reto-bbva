import React from 'react';
import './css/nav.css'
import {Link} from 'react-router-dom'
import Logo from "./css/Imagenes/blanco.png";

function Nav() {
    const navStyle = {
        color: 'white'
    };
    return (
                    <nav>
                        <img className = "logo" src={Logo} alt="" width="20%"/>
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
