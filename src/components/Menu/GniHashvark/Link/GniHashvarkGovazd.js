import React from 'react';
import GniHashvarkMenu from './GniHashvarkMenu/GniHashvarkMenu';
import './Link.css';
import Form from './Form/Form';

class GniHashvarkGovazd extends React.Component {
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
                        ԻՆՏԵՐՆԵՏ-ԳՈՎԱԶԴԻ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ
                    </h2>
                    <div className="divContent">
                        <h3>
                            Ո՞Ր ԾԱՌԱՅՈԹՅՈՒՆՆԵՐՆ ԵՆ ՁԵԶ ԱՆՀՐԱԺԵՇՏ 
                        </h3>
    
                        <div>
                            <div>
                                <label title="50000 դրամ">
                                    <input type="checkbox" name="GovazdayinBaner" value="GovazdayinBaner"  alt="50000" onChange={ this.convocation }/>
                                    <span>Գովազդային բաններների պատրաստում </span>
                                </label>
    
                                <label title="50000 դրամ">
                                    <input type="checkbox" name="GovazdayinArshavnerKayq" value="GovazdayinArshavnerKayq" alt="50000" onChange={ this.convocation }/>
                                    <span>Գովազդային արշավի կազմակերպում կայքերում</span>
                                </label>
    
                                <label title="80000 դրամ">
                                    <input type="checkbox" name="GovazdayinArshavnerSockayq" value="GovazdayinArshavnerSockayq" alt="80000" onChange={ this.convocation }/>
                                    <span>Գովազդային արշավի կազմակերպում սոցցանցերում</span>
                                </label>
                                <label title="100000 դրամ">
                                    <input type="checkbox" name="GovazdayinArshavnerGoogleYandex" value="GovazdayinArshavnerGoogleYandex" alt="100000" onChange={ this.convocation }/>
                                    <span>Գովազդային արշավի կազմակերպում Google Adsense կամ Yandex Direct համակարգերում</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <Form /> 
                </div>
            </div>
        )
    }
}

export default GniHashvarkGovazd;