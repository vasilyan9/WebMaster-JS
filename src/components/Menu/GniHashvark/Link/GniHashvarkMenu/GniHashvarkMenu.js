import React from 'react';
import './GniHashvarkMenu.css';
import GniHashvarkMenuItemImg1 from "./GniHashvarkMenuItemImg1.png"
import GniHashvarkMenuItemImg2 from "./GniHashvarkMenuItemImg2.png"
import GniHashvarkMenuItemImg3 from "./GniHashvarkMenuItemImg3.png"
import GniHashvarkMenuItemImg4 from "./GniHashvarkMenuItemImg4.png"
import {NavLink} from 'react-router-dom';

const GniHashvarkMenu = () => {
    return (
        <div className="GniHashvarkMenuSection">
            <NavLink to="/gni_hashark/web_kayq" activeClassName="GniHashvarkMenuItemActive">
                <div className="GniHashvarkMenuItem">
                    <div>
                        <img alt="img" src={GniHashvarkMenuItemImg1} />
                    </div>

                    <div>
                        <span>
                            Վեբ կայքի պատրաստում <br /> կամ վերափոխում
                        </span>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/gni_hashark/dizayn" activeClassName="GniHashvarkMenuItemActive">
                <div className="GniHashvarkMenuItem">
                    <div>
                        <img alt="img" src={GniHashvarkMenuItemImg2} />
                    </div>
                    
                    <div>
                        <span>
                            Գրաֆիկական ձևավորում <br /> (ԴԻԶԱՅՆ)
                        </span>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/gni_hashark/seo" activeClassName="GniHashvarkMenuItemActive">
                <div className="GniHashvarkMenuItem"> 
                    <div>
                        <img alt="img" src={GniHashvarkMenuItemImg3} />
                    </div>
                    
                    <div>
                        <span>
                            Կայքերի առաջխաղացում <br /> (SEO, SMM, SMO)
                        </span>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/gni_hashark/govazd" activeClassName="GniHashvarkMenuItemActive">
                <div className="GniHashvarkMenuItem">
                    <div>
                        <img alt="img" src={GniHashvarkMenuItemImg4} />
                    </div>
                    
                    <div>
                        <span>
                            Ինտերնետ-գովազդի <br /> ծառայություններ
                        </span>
                    </div>
                </div>
            </NavLink>
            
            <NavLink to="/gni_hashark/paymanagrer" activeClassName="GniHashvarkMenuItemActive">
                <div className="GniHashvarkMenuItem GniHashvarkMenuItem_1">
                    <span>
                        Պայմանագրեր
                    </span>
                </div>
            </NavLink>

                <div className="GniHashvarkMenuItem GniHashvarkMenuItem_1">
                    <span>
                        Նախնական գինը <br /> 
                    </span>

                    <span>
                        <input type="text" disabled="false" value="0 դրամ" />
                    </span>
                </div>
        </div>
    )
}

export default GniHashvarkMenu;