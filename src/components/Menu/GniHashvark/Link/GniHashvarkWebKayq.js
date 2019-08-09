import React from 'react';
import GniHashvarkMenu from './GniHashvarkMenu/GniHashvarkMenu';
import './Link.css';
import Form from './Form/Form';

class GniHashvarkWebKayq extends React.Component {
    constructor () {
        super()
        this.state = {
            sumValue : 0
        }
    }

    convocation = (event) => {
        this.setState({
            sumValue: event.target.checked ? parseInt(this.state.sumValue , 10) + parseInt(event.target.alt , 10) : parseInt(this.state.sumValue , 10) - parseInt(event.target.alt , 10)
        })

    }
    
    render = () => {
        return (
            <div className="GniHashvarkSection">
                <div className="GniHashvarkMain">
                    <GniHashvarkMenu sumValue = {this.state.sumValue} />
                    <h2>
                        ՎԵԲ ԿԱՅՔԻ ՊԱՏՐԱՍՏՈՒՄ ԿԱՄ ՎԵՐԱՓՈԽՈՒՄ
                    </h2>
                    <div className="divContent">
                        <h3>
                            Ի՞ՆՉ ՀՆԱՐԱՎՈՐՈՒԹՅՈՒՆՆԵՐ ԵՆ ԱՆՀՐԱԺԵՇՏ
                        </h3>
    
                        <div>
                            <div>
                                <label title="20000 դրամ">
                                    <input type="checkbox" name="opportunity" value="contactForm"  alt="20000" onChange={ this.convocation }/>
                                    <span>Կոնտակտային ֆորմա</span>
                                </label>
    
                                <label title="20000 դրամ">
                                    <input type="checkbox" name="opportunity" value="eventCalendar" alt="20000" onChange={ this.convocation }/>
                                    <span>Միջոցառումների օրացույց</span>
                                </label>
    
                                <label title="25000 դրամ">
                                    <input type="checkbox" name="opportunity" value="galleryPhoto" alt="25000" onChange={ this.convocation }/>
                                    <span>Նկարների ցուցասրահ</span>
                                </label>

                                <label title="25000 դրամ">
                                    <input type="checkbox" name="opportunity" value="online calculator" alt="25000" onChange={ this.convocation }/>
                                    <span>Օնլայն հաշվիչ</span>
                                </label>
    
                                <label title="50000 դրամ">
                                    <input type="checkbox" name="opportunity" value="galleryVideo" alt="50000" onChange={ this.convocation }/>
                                    <span>Տեսադարան</span>
                                </label>
    
                                <label title="35000 դրամ">
                                    <input type="checkbox" name="opportunity" value="onlineStore" alt="35000" onChange={ this.convocation }/>
                                    <span>Էլ.խանութի զամբյուղ</span>
                                </label>
                            </div>
    
                            <div>
                                <label title="25000 դրամ">
                                    <input type="checkbox" name="opportunity" value="socialSayt" alt="25000" onChange={ this.convocation }/>
                                    <span>Սոցիալական ցանցերի գործիքների ինտեգրում </span>
                                </label>
    
                                <label title="80000 դրամ">
                                    <input type="checkbox" name="opportunity" value="onlinPayment" alt="80000" onChange={ this.convocation }/>
                                    <span>Օնլայն վճարային համակարգերի միացում</span>
                                </label>
    
                                <label title="35000 դրամ">
                                    <input type="checkbox" name="opportunity" value="mailSubscribe" alt="35000" onChange={ this.convocation }/>
                                    <span>Օգտատերերի էլ.հասցեի գրանցում (E-mail subscribe) </span>
                                </label>

                                <label title="25000 դրամ">
                                    <input type="checkbox" name="opportunity" value="animtion" alt="25000" onChange={ this.convocation }/>
                                    <span>Անիմացիոն սլայդ</span>
                                </label>
    
                                <label title="50000 դրամ">
                                    <input type="checkbox" name="opportunity" value="registration" alt="50000" onChange={ this.convocation }/>
                                    <span>Օգտատերերի ամբողջական գրանցում </span>
                                </label>
    
                                <label title="80000 դրամ">
                                    <input type="checkbox" name="opportunity" value="chat" alt="80000" onChange={ this.convocation }/>
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
                                    <input type="checkbox" name="logo" value="logo"  alt="20000" onChange={ this.convocation }/>
                                    <span>Կայքի տեքստերի կազմում</span>
                                </label>
                            </div>

                            <div>
                                <label title="20000 դրամ">
                                    <input type="checkbox" name="logo" value="logo"  alt="20000" onChange={ this.convocation }/>
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
                                <input type="checkbox" name="language" value="hayeren"  alt="0" onChange={ this.convocation }/>
                                <span>Հայերեն</span>
                            </label>

                            <label title="80000 դրամ">
                                <input type="checkbox" name="language" value="russeren"  alt="80000" onChange={ this.convocation }/>
                                <span>Ռուսերեն</span>
                            </label>

                            <label title="80000 դրամ">
                                <input type="checkbox" name="language" value="angleren"  alt="80000" onChange={ this.convocation }/>
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
                                <input type="radio" name="adminka" value="adminkaTrue"  alt="120000" onChange={ this.convocation }/>
                                <span>Այո</span>
                            </label>

                            <label title="Անվճար">
                                <input type="radio" name="adminka" value="adminkaFalse"  alt="0" onChange={ this.convocation }/>
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