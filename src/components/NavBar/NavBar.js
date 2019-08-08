import React from 'react';
import {NavLink} from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
    return (
        <nav>
             <ul>
                <li><NavLink to="/glxavor" activeClassName="activ">Գլխավոր</NavLink></li>
                <li><NavLink to="/carayutyunner" activeClassName="activ">Ծառայություններ</NavLink></li>
                <li><NavLink to="/gni_hashark" activeClassName="activ">Գնի հաշվարկ</NavLink></li>
                <li><NavLink to="/mer_masin" activeClassName="activ">Մեր Մասին</NavLink></li>
                <li><NavLink to="/kap" activeClassName="activ">Կապ</NavLink></li>
             </ul>
        </nav>
    )
}

export default NavBar;