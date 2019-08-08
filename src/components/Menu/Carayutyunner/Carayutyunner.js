import React from 'react';
import carayutyunner_imig from './carayutyunner.gif'
import carayutyunner1 from "./Link/WebKayq/carayutyunner1.png"
import carayutyunner2 from "./Link/WebCragir/carayutyunner2.png"
import carayutyunner3 from "./Link/Logo/carayutyunner3.png"
import carayutyunner4 from "./Link/Seo/carayutyunner4.png"
import carayutyunner5 from "./Link/Copyrayting/carayutyunner5.png"
import carayutyunner6 from "./Link/Govazd/carayutyunner6.png"
import {Link} from 'react-router-dom';
import "./Carayutyunner.css"

const Carayutyunner = () => {
    return (
        <div className="carayutyunner_section">
            <div>
                <img alt="img" src={carayutyunner_imig}/>
            </div>

            <div>
                <div className="studio">
                    <h2>
                        ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ
                    </h2>
                    <b>
                        Ինտերնետի համընդհանուր տարածման օրերին բիզնեսի լավ առաջխաղացման համար անհրաժեշտ է սեփական ներկայացուցչությունն ունենալ ցանցում: Այսօր ինտերնետային տարածությունը զբաղեցնում են միեւնույն բովանդակությամբ բազմաթիվ կայքեր, ինչը ստիպում է ավելի լուրջ վերաբերվել կայքի ստեղծման ու կենսապահովման գործընթացներին: Կայքը լրացուցիչ գովազդ է Ինտերնետում, այն նոր գործընկերներ ձեռք բերելու լավ հնարավորություն է, ինչը խթանում է Ձեր ընկերության գործունեության զարգացման շարունակական գործընթացը: 
                        WebMaster Studio-ն Ձեզ առաջարկում է ինտերնետային ծառայությունների ամբողջական փաթեթ, որը ներառում է կայքի ստեղծում, քոնթենթ-ռայթինգ, որոնման օպտիմիզացիա, կայքի առաջխաղացում որոնման համակարգերում (SEO), տարբեր տեսակի ինտերնետային գովազդներ: 
                        Վեբ-կայքը Ձեր յուրօրինակ այցեքարտն է Ինտերնետում: Առավելագույն արդյունավետության համար այն պետք է լինի մանրամասնորեն մտածված եւ գրագետ առաջխաղացված: Մենք առաջարկում ենք ինտերնետում Ձեր գործունեության վերաբերյալ արդյունավետ գովազդի 5 փուլ:
                    </b>
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <Link to="/carayutyunner/web_kayq">
                            <img alt="img" src={carayutyunner1} />
                        </Link>
                    </div>

                    <div>
                        <h3>
                            <Link to="/carayutyunner/web_kayq">Վեբ կայքերի պատրաստում և վեբ ծրագրավորում</Link>
                        </h3>
                        <span>
                            Կայքի ստեղծումն ու մշակումը չափազանց կարեւոր գործընթացներ են: Չէ՞ որ առաջին տպավորությունը ստացվում է արտաքին տեսքից, իսկ կայքը Ձեր գործունեության արտաքինն է` ներկայացված Ինտենետում: Կայքերի մշակումը կրեատիվ մոտեցում պահանջող գործընթաց է: Թեմատիկայից անկախ` մենք կառաջարկենք ճաշակով եւ օրիգինալ դիզայն Ձեր կայքի համար, որն ըստ արժանվույն կներկայացնի Ձեր գործունեությունը:
                        </span>
                    </div>
                </div>

                <div>
                    <div>
                        <Link to="/carayutyunner/web_cragir">
                            <img alt="img" src={carayutyunner2} />
                        </Link>
                    </div>

                    <div>
                        <h3>
                            <Link to="/carayutyunner/web_cragir">Վեբ-հիմքով ծրագրեր</Link>
                        </h3>
                        <span>
                            WEB-MASTER Studio-ն ստեղծում է վեբ-հիմքով ծրագրեր /Web-based applications/, որոնք կօգնեն ավտոմատացնել, 
                            կատարելագործել եւ արդյունավետ դարձնել բիզնեսի հետ կապված Ձեր գործունեությունը (մարքեթինգի եւ հաճախորդների սպասարկման ոլորտում) և բազմաթիվ կիրառությունների հնարավորություն կտա: Վեբ ծրագիրը հաճախ տրամադրում ենք սպառողներին ծրագրի ստեղծողների կողմից` իրենց իսկ սերվերների վրա:
                        </span>
                    </div>
                </div>

                <div>
                    <div>
                        <Link>
                            <img alt="img" src={carayutyunner3} />
                        </Link>
                    </div>

                    <div>
                        <h3>
                            <Link>Լոգո</Link>
                        </h3>
                        <span>
                            Յուրաքանչյուր ձեռնարկությանն ու կազմակերպությանը անհրաժեշտ է այնպիսի ապրանքանիշ, որը հեշտությամբ կհիշվի, կլինի օրիգինալ եւ, միաժամանակ, առավելագույնս կբնութագրի առաջարկվող ապրանքատեսակը կամ ծառայությունը: Լոգոտիպերը պետք է ստեղծվեն ու մշակվեն` հաշվի առնելով Ձեր գործունեության առանձնահատկությունները:
                        </span>
                    </div>
                </div>

                <div>
                    <div>
                        <Link to="/carayutyunner/seo">
                            <img alt="img" src={carayutyunner4} />
                        </Link>
                    </div>

                    <div>
                        <h3>
                            <Link to="/carayutyunner/seo">Կայքերի առաջխաղացում որոնման համակարգերում (SEO)</Link>
                        </h3>
                        <span>
                            Կայքի առաջխաղացումը որոնման համակարգերում իրականացվում է թիրախային լսարանի այցելությունների հոսքը դեպի Ձեր կայք առավելագույնս մեծացնելու նպատակով: Որպեսզի որոնողական համակարգերը շատ արագ գտնեն Ձեր կայքը, անհրաժեշտ է կայքի որոնման օպտիմիզացիա` որոշ պահանջների հաշվառմամբ: Մենք գիտենք, թե ինչպես ճիշտ առաջխաղացնել Ձեր կայքը SEO-առաջխաղացման, հղումների փոխանակման եւ կայքերի առաջխաղացման այլ գործիքների օգտագործմամբ:
                        </span>
                    </div>
                </div>

                <div>
                    <div>
                        <Link to="/carayutyunner/copyrayting">
                            <img alt="img" src={carayutyunner5} />
                        </Link>
                    </div>

                    <div>
                        <h3>
                            <Link to="/carayutyunner/copyrayting">Քոփիռայթինգ</Link>
                        </h3>
                        <span>
                            Գեղեցիկ կայքը պետք է նաեւ բովանդակալից լինի: Նյութի քանակից անկախ` քոնթենթը /կայքի տեքստային բովանդակությունը/ պետք է լինի հնարավորինս պարզ շարադրված` որոշակի առանցքային բառերի օգտագործմամբ: Մեր փորձառու մասնագետները ստեղծում են առանցքային տեքստեր` որոնման համակարգերում հարմարավետ ընթերցվող անհրաժեշտ բառախմբերի պարունակությամբ: Մեր արհեստավարժ թարգմանիչները պատրաստ են ամենակարճ ժամկետներում թարգմանել տեքստերը Ձեր ցանկացած լեզվով:
                        </span>
                    </div>
                </div>

                <div>
                    <div>
                        <Link to="/carayutyunner/govazd">
                            <img alt="img" src={carayutyunner6} />
                        </Link>
                    </div>

                    <div>
                        <h3>
                            <Link to="/carayutyunner/govazd">Գովազդ ինտերնետում</Link>
                        </h3>
                        <span>
                            Կայքի ստեղծումն ու մշակումը չափազանց կարեւոր գործընթացներ են: Չէ՞ որ առաջին տպավորությունը ստացվում է արտաքին տեսքից, իսկ կայքը Ձեր գործունեության արտաքինն է` ներկայացված Ինտենետում: Կայքերի մշակումը կրեատիվ մոտեցում պահանջող գործընթաց է: Թեմատիկայից անկախ` մենք կառաջարկենք ճաշակով եւ օրիգինալ դիզայն Ձեր կայքի համար, որն ըստ արժանվույն կներկայացնի Ձեր գործունեությունը:
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carayutyunner;