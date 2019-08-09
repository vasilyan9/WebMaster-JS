import React from 'react';
import GniHashvarkMenu from './GniHashvarkMenu/GniHashvarkMenu';
import './Link.css';
import Form from './Form/Form';

class GniHashvarkDizayn extends React.Component {
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
                        ԳՐԱՖԻԿԱԿԱՆ ԴԻԶԱՅՆ
                    </h2>
                    <div className="divContent">
                        <h3>
                            ՑԱՆԿԱԼԻ ՊԱՅՄԱՆՆԵՐ
                        </h3>
    
                        <div>
                            <div>
                                <label title="20000 դրամ">
                                    <input type="checkbox" name="logo" value="logo"  alt="20000" onChange={ this.convocation }/>
                                    <span>Լոգոի ձեւավորում</span>
                                </label>
    
                                <label title="20000 դրամ">
                                    <input type="checkbox" name="broshyur" value="broshyur" alt="20000" onChange={ this.convocation }/>
                                    <span>Բրոշյուրի ձեւավորում</span>
                                </label>
    
                                <label title="25000 դրամ">
                                    <input type="checkbox" name="katalog" value="katalog" alt="25000" onChange={ this.convocation }/>
                                    <span>Կատալոգի ձեւավորում</span>
                                </label>
                            </div>
    
                            <div>
                                <label title="25000 դրամ">
                                    <input type="checkbox" name="amsagir" value="amsagir" alt="25000" onChange={ this.convocation }/>
                                    <span>Ամսագրի ձեւավորում</span>
                                </label>
    
                                <label title="50000 դրամ">
                                    <input type="checkbox" name="girq" value="girq" alt="50000" onChange={ this.convocation }/>
                                    <span>Գրքի ձեւավորում</span>
                                </label>
    
                                <label title="35000 դրամ">
                                    <input type="checkbox" name="pastar" value="pastar" alt="35000" onChange={ this.convocation }/>
                                    <span>Պաստառի  ձեւավորում</span>
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

export default GniHashvarkDizayn;