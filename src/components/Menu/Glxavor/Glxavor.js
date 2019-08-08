import React from 'react';
import Background   from './bg.png'
import Icon_1 from './1.png'
import Icon_2 from './2.png'
import Icon_3 from './3.png'
import Icon_4 from './4.png'
import {Link} from 'react-router-dom';
import './glxavor.css';


let Glxavor_section = {
    backgroundImage: `url(${Background})`
}

const Glxavor = () => {
    return (
        <div>
            <div style={Glxavor_section} className="Glxavor_section">    
                <div>
                    <Link to="/carayutyunner/web_kayq" ><img alt="img" src={Icon_1}/></Link>
                    <h3>ՎԵԲ ԿԱՅՔԵՐԻ ՊԱՏՐԱՍՏՈՒՄ</h3>
                    <span>Վեբ կայքի նախագծում ու իրականացում</span>
                    <hr />
                    <span>Առկա կայքերի վերակազմավորում</span>
                    <hr />
                    <span>Վեբ կայքերի սպասարկում</span>
                </div>

                <div>
                    <Link to="/carayutyunner/govazd" ><img alt="img" src={Icon_2}/></Link>
                    <h3>ԻՆՏԵՐՆԵՏ ՄԱՐՔԵԹԻՆԳ</h3>
                    <span>Կայքերի առաջխաղացում (SEO)</span>
                    <hr />
                    <span>(SMM, SMO)</span>
                    <hr />
                    <span>Գովազդային վահանակի նախագծում</span>
                </div>

                <div>
                    <Link><img alt="img" src={Icon_3}/></Link>
                    <h3>ԳՐԱՖԻԿԱԿԱՆ ՁԵՎԱՎՈՐՈՒՄ</h3>
                    <span>ԳՐԱՖԻԿԱԿԱՆ ՁԵՎԱՎՈՐՈՒՄ </span>
                    <hr />
                    <span>Ֆիրմային ոճի նախագծում</span>
                    <hr />
                    <span>Կատալոգի ձևավորում</span>
                </div>
                
                <div>
                    <Link to="/carayutyunner/web_cragir" ><img alt="img" src={Icon_4}/></Link>
                    <h3>ԾՐԱԳՐԱՎՈՐՈՒՄ</h3>
                    <span>Վեբ ծրագրավորում</span>
                    <hr />
                    <span>CRM համակարգերի պատրաստում</span>
                    <hr />
                    <span>Վեբ հիմքով ծրագրեր</span>
                </div>
            </div>
            
            <div className="Glxavor_text">
                <div className="studio">
                    <h2>ՊՐՈՖԵՍԻՈՆԱԼ ՎԵԲ ԿԱՅՔԵՐԻ ՊԱՏՐԱՍՏՈՒՄ</h2>
                    <span>WebMaster Studio-ն վեբ դիզայներների, ծրագրավորողների և նախագծերի ղեկավարների մասնագիտացված թիմ է, որը ոչ միայն հնարավորինս սեղմ ժամկետներում և բարձր պրոֆեսիոնալ մակարդակով կայքեր է ստեղծում, այլև գտնում է անհատական լուծում ամեն հաճախորդի համար և առանձնահատուկ մոտեցում է ցուցաբերում յուրաքանչյուր գործին: </span>
                    <br/>
                    <span>Կայքի ստեղծմանը նախորդում է ներկայացվող ընկերության գործունեության ամբողջական վերլուծությունն ու մրցակցող կազմակերպությունների ուսումնասիրությունը, իսկ հետագայում նախատեսվում է կայքի կայացման, զարգացման և որոնման համակարգում առաջխաղացման աշխատանքների իրականացում: </span>
                    <br/>
                    <span>Մեզ վստահելով Ձեր վեբ կայքի պատրաստումը՝ Դուք կարող եք համոզված լինել, որ կդառնաք նորագույն տեխնոլոգիաներով ստեղծված արդի ռեսուրսի սեփականատեր: </span>    
                </div>
            </div>
        </div>
        
    )
}

export default Glxavor;