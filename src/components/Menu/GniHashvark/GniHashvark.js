import React from 'react';
import GniHashvarkImg1 from './gniHashvark.gif'
import GniHashvarkIcon1 from './GniHashvarkIcon1.png'
import GniHashvarkIcon2 from './GniHashvarkIcon2.png'
import GniHashvarkIcon3 from './GniHashvarkIcon3.png'
import GniHashvarkIcon4 from './GniHashvarkIcon4.png'
import {Link} from 'react-router-dom';
import './GniHashvark.css'

const GniHashvark = () => {
    return (
        <div className="GniHashvark">
            <img alt="img" src={GniHashvarkImg1} />
            <div>
                <p>
                    Մեր ընկերության մենեջերները հնարավորինս արագ կտրամադրեն Ձեր պահանջներին համապատասխան վեբ կայքի պատրաստման գինը և նախատեսվող ժամկետը, SEO առաջխաղացման արժեքը և վերլուծությունը, ինչպես նաև այլ նախընտրած ծառայությունների վերաբերյալ մեր առաջարկը: 
                </p>
                <p>
                    Ո՞ր ծառայությունն է Ձեզ անհրաժեշտ
                </p>
            </div>
            <div>
                <div>
                    <img alt="img" src={GniHashvarkIcon1} />
                    <p>
                        ՎԵԲ ԿԱՅՔԻ ՊԱՏՐԱՍՏՈՒՄ ԿԱՄ ՎԵՐԱՓՈԽՈՒՄ
                    </p>
                    <Link to="/gni_hashark/web_kayq">
                        ՀԱՇՎԱՐԿԵԼ
                    </Link>
                </div>

                <div>
                    <img alt="img" src={GniHashvarkIcon2} />
                    <p>
                        ԿԱՅՔԵՐԻ ԱՌԱՋԽԱՂԱՑՈՒՄ (SEO, SMO, SMM)
                    </p>
                    <Link to="/gni_hashark/seo">
                        ՀԱՇՎԱՐԿԵԼ
                    </Link>
                </div>

                <div>
                    <img alt="img" src={GniHashvarkIcon3} />
                    <p>
                        ԳՐԱՖԻԿԱԿԱՆ ԴԻԶԱՅՆ
                    </p>
                    <Link to="/gni_hashark/dizayn">
                        ՀԱՇՎԱՐԿԵԼ
                    </Link>
                </div>

                <div>
                    <img alt="img" src={GniHashvarkIcon4} />
                    <p>
                        ԻՆՏԵՐՆԵՏ-ԳՈՎԱԶԴԻ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ
                    </p>
                    <Link to="/gni_hashark/govazd">
                        ՀԱՇՎԱՐԿԵԼ
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GniHashvark;