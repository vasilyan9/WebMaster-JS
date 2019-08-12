import React from 'react';
import GniHashvarkMenu from './GniHashvarkMenu/GniHashvarkMenu';
import './Link.css';
import Form from './Form/Form';
import DomenPaymanagir from './Վեբ կայքի ստեղծման պայմանագիր.docx'
import HostingPaymanagir from './Վեբ կայքի ստեղծման պայմանագիր.docx'

class GniHashvarkWebKayq extends React.Component {
    constructor () {
        super()
        this.state = {
            sumValue : 0,
            selectValue: 0
        }
    }

    convocationCheck = (event) => {
        this.setState({
            sumValue: event.target.checked ? parseInt(this.state.sumValue , 10) + parseInt(event.target.alt , 10) : parseInt(this.state.sumValue , 10) - parseInt(event.target.alt , 10)
        })
    }

    convocationSelect = (event) => {
        // this.setState({
        //     sumValue: event.target[event.target.selectedIndex] ? parseInt(this.state.sumValue , 10) - parseInt(event.target.value , 10) : parseInt(this.state.sumValue , 10) + parseInt(event.target.value , 10)
        // })

    }
    
    render = () => {
        return (
            <div className="GniHashvarkSection">
                <div className="GniHashvarkMain">
                    <GniHashvarkMenu sumValue = {this.state.sumValue} />
                    <h2>
                        ՎԵԲ ԿԱՅՔԻ ՊԱՏՐԱՍՏՈՒՄ ԿԱՄ ՎԵՐԱՓՈԽՈՒՄ
                    </h2>

                    <div className="divForm">
                        <h3>
                            ՊԱՏՎԵՐԻ ՏԵՍԱԿ
                        </h3>
                        <div>
                            <div>
                                <label>
                                    <input type="radio" name="patveriTesak" value="norKayq"/>
                                    <span>Նոր կայքի ձևավորում և ծրագրավորում</span>
                                </label>

                                <label>
                                    <input type="radio" name="patveriTesak" value="arkaKayqDizayn"/>
                                    <span>Առկա կայքի ձևավորման փոփոխում</span>
                                </label>
                                
                                <label>
                                    <input type="radio" name="patveriTesak" value="arkaKayqCragir"/>
                                    <span>Առկա կայքի վրա ծրագրային փոփոխում կամ ավելացում</span>
                                </label>
                            </div>
                        </div>    
                    </div>

                    <div className="divSelect">
                        <h3>
                            ՁԵԶ ՀԱՐԿԱՎՈ՞Ր Է ՕԳՆՈՒԹՅՈՒՆ ԴՈՄԵՆ ԿԱՄ ՀՈՍԹԻՆԳ ԳՐԱՆՑԵԼՈՒ ՀԱՄԱՐ 
                        </h3>
                        <div>
                            <select required onChange={ this.convocationSelect }>
                                <option disabled selected>Ընտրեք դոմենի տեսակը</option>
                                <option title="9000 դրամ" value="9000_blog">.am</option>
                                <option title="6000 դրամ" value="6000_ayceqart">.com</option>
                                <option title="5500 դրամ" value="5500_hayt_kayr">.ru</option>
                                <option title="5500 դրամ" value="5500_lratvakan">.org</option>
                                <option title="4500 դրամ" value="4500_socialakan">.net</option>
                                <option title="13000 դրամ" value="13000_el_xanut">.tv</option>
                                <option title="5000 դրամ" value="5000_portal">.info</option>
                                <option title="6000 դրամ" value="6000_el_shuka">.biz</option>
                            </select>
                            <span>
                                Սեխմեք 
                                <a href={DomenPaymanagir} title="Ներբեռնել պայմանագրի օրինակը"> այստեղ </a>
                                և ծանոթացեք դոմեն անվան գրանցման պայմանագրին
                            </span>
                        </div>

                        <div>
                            <select required>
                                <option disabled selected>Ընտրեք հոստինգի տեսակը</option>				
                                <option title="1000 դրամ" value="1000_mini1">Մինի 1 ամիս</option>
                                <option title="3000 դրամ" value="3000_mini2">Մինի 3 ամիս</option>
                                <option title="6000 դրամ" value="6000_mini3">Մինի 6 ամիս</option>
                                <option title="10000 դրամ" value="10000_mini4">Մինի 1 տարի</option>
                                <option title="20000 դրամ" value="20000_mini5">Մինի 2 տարի</option>

                                <option title="3000 դրամ" value="3000_ekonom1">Էկոնոմ 1 ամիս</option>
                                <option title="9000 դրամ"  value="9000_ekonom2">Էկոնոմ 3 ամիս</option>
                                <option title="18000 դրամ" value="18000_ekonom3">Էկոնոմ 6 ամիս</option>
                                <option title="30000 դրամ" value="30000_ekonom4">Էկոնոմ 1 տարի</option>
                                <option title="60000 դրամ" value="60000_ekonom5">Էկոնոմ 2 տարի</option>

                                <option title="5000 դրամ" value="5000_standart1">Ստանդարտ 1 ամիս</option>
                                <option title="15000 դրամ" value="15000_standart2">Ստանդարտ 3 ամիս</option>
                                <option title="30000 դրամ" value="30000_standart3">Ստանդարտ 6 ամիս</option>
                                <option title="50000 դրամ"  value="50000_standart4">Ստանդարտ 1 տարի</option>
                                <option title="100000 դրամ" value="100000_standart5">Ստանդարտ 2 տարի</option>

                                <option title="8000 դրամ"   value="8000_biznes1">Բիզնես 1 ամիս</option>
                                <option title="24000 դրամ"  value="24000_biznes2">Բիզնես 3 ամիս</option>
                                <option title="48000 դրամ" value="48000_biznes3">Բիզնես 6 ամիս</option>
                                <option title="80000 դրամ" value="80000_biznes4">Բիզնես 1 տարի</option>
                                <option title="160000 դրամ"  value="160000_biznes5">Բիզնես 2 տարի</option>

                                <option title="11000 դրամ"   value="11000_vip1">VIP 1 ամիս</option>
                                <option title="33000 դրամ"   value="33000_vip2">VIP 3 ամիս</option>
                                <option title="60000 դրամ"   value="60000_vip3">VIP 6 ամիս</option>
                                <option title="110000 դրամ"  value="110000_vip4">VIP 1 տարի</option>
                                <option title="220000 դրամ"  value="220000_vip5">VIP 2 տարի</option>
                            </select>
                            <span>
                                Սեխմեք 
                                <a href={HostingPaymanagir} title="Ներբեռնել պայմանագրի օրինակը"> այստեղ </a>                                
                                և ծանոթացեք հոսթինգ ծառայության գրանցման պայմանագրին 
                            </span>
                        </div>
                    </div>

                    <div className="divSelect">
                        <h3>
                            ԿԱՅՔԻ ՏԵՍԱԿԸ 
                        </h3>

                        <div>
                            <select required>
                                <option disabled selected>Ընտրեք կայքի տեսակը</option>
                                <option title="35000 դրամ" value="35000_ayceqart">Կայք այցեքարտ</option>
                                <option title="11000 դրամ" value="11000_hayt_kayr">Հայտարարությունների կայք</option>
                                <option title="100000 դրամ" value="100000_lratvakan">Լրատվական կայք</option>
                                <option title="200000 դրամ" value="200000_socialakan">Սոցիալական ցանց</option>
                                <option title="150000 դրամ"  value="150000_el_xanut">Էլեկտրոնային խանութ (ecommerce)</option>
                                <option title="150000 դրամ"  value="150000_portal">Պորտալ</option>
                                <option title="150000 դրամ" value="150000_el_shuka">Էլեկտրոնային շուկա</option>
                                <option title="50000 դրամ" value="50000_blog">Բլոգ</option>
                                <option title="120000 դրամ"  value="120000_ansharj_guyq">Անշարժ գույքի գործակալություն</option>
                                <option title="50000 դրամ"   value="50000_web_cragir">Վեբ-հիմքով ծրագիր</option>
                            </select>
                        </div>

                        <div>
                            <select required>
                                <option disabled selected>Ընտրեք ավարտման ժամկետը</option>
                            </select>
                        </div>
                    </div>

                    <div className="divContent">
                        <h3>
                            Ի՞ՆՉ ՀՆԱՐԱՎՈՐՈՒԹՅՈՒՆՆԵՐ ԵՆ ԱՆՀՐԱԺԵՇՏ
                        </h3>
    
                        <div>
                            <div>
                                <label title="20000 դրամ">
                                    <input type="checkbox" name="opportunity" value="contactForm"  alt="20000" onChange={ this.convocationCheck }/>
                                    <span>Կոնտակտային ֆորմա</span>
                                </label>
    
                                <label title="20000 դրամ">
                                    <input type="checkbox" name="opportunity" value="eventCalendar" alt="20000" onChange={ this.convocationCheck }/>
                                    <span>Միջոցառումների օրացույց</span>
                                </label>
    
                                <label title="25000 դրամ">
                                    <input type="checkbox" name="opportunity" value="galleryPhoto" alt="25000" onChange={ this.convocationCheck }/>
                                    <span>Նկարների ցուցասրահ</span>
                                </label>

                                <label title="25000 դրամ">
                                    <input type="checkbox" name="opportunity" value="online calculator" alt="25000" onChange={ this.convocationCheck }/>
                                    <span>Օնլայն հաշվիչ</span>
                                </label>
    
                                <label title="50000 դրամ">
                                    <input type="checkbox" name="opportunity" value="galleryVideo" alt="50000" onChange={ this.convocationCheck }/>
                                    <span>Տեսադարան</span>
                                </label>
    
                                <label title="35000 դրամ">
                                    <input type="checkbox" name="opportunity" value="onlineStore" alt="35000" onChange={ this.convocationCheck }/>
                                    <span>Էլ.խանութի զամբյուղ</span>
                                </label>
                            </div>
    
                            <div>
                                <label title="25000 դրամ">
                                    <input type="checkbox" name="opportunity" value="socialSayt" alt="25000" onChange={ this.convocationCheck }/>
                                    <span>Սոցիալական ցանցերի գործիքների ինտեգրում </span>
                                </label>
    
                                <label title="80000 դրամ">
                                    <input type="checkbox" name="opportunity" value="onlinPayment" alt="80000" onChange={ this.convocationCheck }/>
                                    <span>Օնլայն վճարային համակարգերի միացում</span>
                                </label>
    
                                <label title="35000 դրամ">
                                    <input type="checkbox" name="opportunity" value="mailSubscribe" alt="35000" onChange={ this.convocationCheck }/>
                                    <span>Օգտատերերի էլ.հասցեի գրանցում (E-mail subscribe) </span>
                                </label>

                                <label title="25000 դրամ">
                                    <input type="checkbox" name="opportunity" value="animtion" alt="25000" onChange={ this.convocationCheck }/>
                                    <span>Անիմացիոն սլայդ</span>
                                </label>
    
                                <label title="50000 դրամ">
                                    <input type="checkbox" name="opportunity" value="registration" alt="50000" onChange={ this.convocationCheck }/>
                                    <span>Օգտատերերի ամբողջական գրանցում </span>
                                </label>
    
                                <label title="80000 դրամ">
                                    <input type="checkbox" name="opportunity" value="chat" alt="80000" onChange={ this.convocationCheck }/>
                                    <span>Օգտատերերի շփման գործիքներ (chat, messenger և այլն)</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="divContent">
                        <h3>
                            ԿԱՅՔԻ ԲՈՎԱՆԴԱԿՈՒԹՅԱՆ ՀԱՄԱԼՐՄԱՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ 
                        </h3>
    
                        <div>
                            <div>
                                <label title="20000 դրամ">
                                    <input type="checkbox" name="logo" value="logo"  alt="20000" onChange={ this.convocationCheck }/>
                                    <span>Կայքի տեքստերի կազմում</span>
                                </label>
                            </div>

                            <div>
                                <label title="20000 դրամ">
                                    <input type="checkbox" name="logo" value="logo"  alt="20000" onChange={ this.convocationCheck }/>
                                    <span>Կայքի լոգոտիպի մշակում</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="divForm">
                        <h3>
                            ԻՆՉ ԼԵԶՎՈՎ ՊԵՏՔ Է ԼԻՆԻ ՁԵՐ ԿԱՅՔԸ
                        </h3>
                        <div>
                            <label title="Անվճար">
                                <input type="checkbox" name="language" value="hayeren"  alt="0" onChange={ this.convocationCheck }/>
                                <span>Հայերեն</span>
                            </label>

                            <label title="80000 դրամ">
                                <input type="checkbox" name="language" value="russeren"  alt="80000" onChange={ this.convocationCheck }/>
                                <span>Ռուսերեն</span>
                            </label>

                            <label title="80000 դրամ">
                                <input type="checkbox" name="language" value="angleren"  alt="80000" onChange={ this.convocationCheck }/>
                                <span>Անգլերեն</span>
                            </label>
                        </div>
                    </div>

                    <div className="divForm">
                        <h3>
                            ՑԱՆԿԱՆՈՒ՞Մ ԵՔ ՀԵՏԱԳԱՅՈՒՄ ԻՆՔՆԵՐԴ ԽՄԲԱԳՐԵԼ ՁԵՐ ԿԱՅՔԸ ԿԱՌԱՎԱՐՄԱՆ ՀԱՄԱԿԱՐԳԻ ՕԳՆՈՒԹՅԱՄԲ
                        </h3>
                        <div>
                            <label title="120000 դրամ">
                                <input type="radio" name="adminka" value="adminkaTrue"  alt="120000" onChange={ this.convocationCheck }/>
                                <span>Այո</span>
                            </label>

                            <label title="Անվճար">
                                <input type="radio" name="adminka" value="adminkaFalse"  alt="0" onChange={ this.convocationCheck }/>
                                <span>Ոչ</span>
                            </label>
                        </div>
                    </div>

                    <div className="divForm">
                        <h3>
                            ՆՇԵՔ ԿԱՅՔԵՐ, ՈՐՈՆՑ ՁԵՎԱՎՈՐՈՒՄԸ ԿԱՄ ՈՐՈՇ ՀՆԱՐԱՎՈՐՈՒԹՅՈՒՆՆԵՐ ՀԱՄԱՊԱՏԱՍԽԱՆՈՒՄ Է ՁԵՐ ՑԱՆԿՈՒԹՅԱՆԸ
                        </h3>
                        <div>
                            <textarea rows="10" placeholder="ՆՇԵՔ ԿԱՅՔԵՐ, ՈՐՈՆՑ ՁԵՎԱՎՈՐՈՒՄԸ ԿԱՄ ՈՐՈՇ ՀՆԱՐԱՎՈՐՈՒԹՅՈՒՆՆԵՐ ՀԱՄԱՊԱՏԱՍԽԱՆՈՒՄ Է ՁԵՐ ՑԱՆԿՈՒԹՅԱՆԸ." />
                        </div>
                    </div>


                    <Form /> 
                </div>
            </div>
        )
    }
}

export default GniHashvarkWebKayq;