import React from 'react';
import logo from './logo.png'
import './header.css';
import NavBar from '../NavBar/NavBar';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header">
            <div>
                <div>
                    <Link to="/">
                        <img src={logo}
                            alt="logo"
                            className="Header-logo" 
                        />
                    </Link>
                </div>
                <NavBar />
            </div>    
        </div>
    )
}

export default Header;