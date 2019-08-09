import React from 'react';
import GniHashvarkMenu from './GniHashvarkMenu/GniHashvarkMenu';
import './Link.css';
import Form from './Form/Form';

class GniHashvarkSeo extends React.Component {
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
                        ԿԱՅՔԵՐԻ ԱՌԱՋԽԱՂԱՑՈՒՄ (SEO, SMO, SMM)
                    </h2>

                    <div className="divForm">
                        <label>
                            <span>
                                Ձեր Կայքը (եթե կա)
                            </span>
                            <input placeholder=" Ներմուծեք Ձեր կայքը անունը." name="userName" type="text" />
                        </label>
            
                        <label>
                            <span>
                                Մրցակից Կայք
                            </span>
                            <input placeholder=" Ներմուծեք Մրցակից Կայքի անվանումը." name="userOrganizationName" type="text" />
                        </label>
            
                        <label>
                            <span>
                                Ձեր էջերի հասցեները (URL) սոց. ցանցերում (եթե կա)
                            </span>
                            <input placeholder=" Ներմուծեք  սոց. ցանցերի հասցեները." name="userMail" type="text" />
                        </label>
                    </div>

                    <div className="divContent">
                        <h3>
                            ԿԱՅՔԵՐԻ ԱՌԱՋԽԱՂԱՑՈՒՄ (SEO, SMO, SMM)
                        </h3>
    
                        <div>
                            <div>
                                <label title="40000 դրամ">
                                    <input type="checkbox" name="KayqiNerqinOptimizacia" value="KayqiNerqinOptimizacia"  alt="40000" onChange={ this.convocation }/>
                                    <span>Կայքի ներքին օպտիմիզացիա </span>
                                </label>
    
                                <label title="30000 դրամ">
                                    <input type="checkbox" name="ArajxaxacmenHarcer" value="ArajxaxacmenHarcer" alt="30000" onChange={ this.convocation }/>
                                    <span>Առաջխաղացմանը նպատակահարմար հարցումների որոշում</span>
                                </label>
    
                                <label title="80000 դրամ">
                                    <input type="checkbox" name="SEOVoronmanHamakargerum" value="SEOVoronmanHamakargerum" alt="80000" onChange={ this.convocation }/>
                                    <span>SEO - Կայքերի առաջխաղացում որոնման համակարգերում</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="divContent">
                        <h3>
                            Ո՞Ր ՍՈՑՑԱՆՑԵՐՈՒՄ Է ԱՆՀՐԱԺԵՇՏ ԱՌԱՋԽԱՂԱՑՈՒՄ
                        </h3>
    
                        <div>
                            <div>
                                <label title="50000 դրամ">
                                    <input type="checkbox" name="arajxaxacumFacebook" value="arajxaxacumFacebook"  alt="50000" onChange={ this.convocation }/>
                                    <span>Facebook</span>
                                </label>
    
                                <label title="30000 դրամ">
                                    <input type="checkbox" name="arajxaxacumGoogle" value="arajxaxacumGoogle" alt="30000" onChange={ this.convocation }/>
                                    <span>Google +</span>
                                </label>
    
                                <label title="30000 դրամ">
                                    <input type="checkbox" name="arajxaxacumVk" value="arajxaxacumVK" alt="30000" onChange={ this.convocation }/>
                                    <span>Вконтакте</span>
                                </label>
                            </div>
    
                            <div>
                                <label title="30000 դրամ">
                                    <input type="checkbox" name="arajxaxacumTwitter" value="arajxaxacumTwitter" alt="30000" onChange={ this.convocation }/>
                                    <span>Twitter</span>
                                </label>
    
                                <label title="50000 դրամ">
                                    <input type="checkbox" name="arajxaxacumInstagram" value="arajxaxacumInstagram" alt="50000" onChange={ this.convocation }/>
                                    <span>Instagram</span>
                                </label>
    
                                <label title="30000 դրամ">
                                    <input type="checkbox" name="arajxaxacumOk" value="arajxaxacumOk" alt="30000" onChange={ this.convocation }/>
                                    <span>Одноклассники</span> 
                                </label>
                            </div>
                        </div>
                    </div>
                    <Form/> 
                </div>
            </div>
        )
    }
}

export default GniHashvarkSeo;