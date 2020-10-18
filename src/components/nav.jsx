import React from 'react';
import './css/nav.css'
import {Link} from 'react-router-dom'
import Logo from "./css/Imagenes/blanco.png";

function Nav() {
    const navStyle = {
        color: 'white'
    };
    return (
        <div className = "container">
        <div className = "row">
            <div className = "col-sm-11">
                <nav>
                    <ul className="nav-links">
                        <Link style = {navStyle} to="/tablas">
                            <li>Tablas</li>
                        </Link>
                        <Link style = {navStyle} to="/proyecto">
                            <li>Proyecto</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
        
    );
}

export default Nav;
