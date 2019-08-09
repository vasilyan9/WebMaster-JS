import React from 'react';
import {NavLink} from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
    return (
        <div>
            <nav className="NavMax">
                <ul>
                    <li><NavLink to="/glxavor" activeClassName="activ">Գլխավոր</NavLink></li>
                    <li><NavLink to="/carayutyunner" activeClassName="activ">Ծառայություններ</NavLink></li>
                    <li><NavLink to="/gni_hashark" activeClassName="activ">Գնի հաշվարկ</NavLink></li>
                    <li><NavLink to="/mer_masin" activeClassName="activ">Մեր Մասին</NavLink></li>
                    <li><NavLink to="/kap" activeClassName="activ">Կապ</NavLink></li>
                </ul>
            </nav>
            

            <div className="NavMinMain">
                <input type="checkbox" name="menu" id="menu" />
                    <label htmlFor="menu">
                        <nav className="NavMin">
                            <ul>
                                <li><NavLink to="/glxavor" activeClassName="activ">Գլխավոր</NavLink></li>
                                <li><NavLink to="/carayutyunner" activeClassName="activ">Ծառայություններ</NavLink></li>
                                <li><NavLink to="/gni_hashark" activeClassName="activ">Գնի հաշվարկ</NavLink></li>
                                <li><NavLink to="/mer_masin" activeClassName="activ">Մեր Մասին</NavLink></li>
                                <li><NavLink to="/kap" activeClassName="activ">Կապ</NavLink></li>
                            </ul>
                        </nav>
                        
                        <span>
                            <div></div>
                            <div></div>
                            <div></div>
                        </span>
                    </label>
            </div>

            
        </div>
    )
}

export default NavBar;