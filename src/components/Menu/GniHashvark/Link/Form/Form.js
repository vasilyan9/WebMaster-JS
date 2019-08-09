import React from 'react';
import userNameImg from './userNameImg.png' 
import userOrganizationNameImg from './userOrganizationNameImg.png' 
import userPhoneImg from './userPhoneImg.png' 
import userMailImg from './userMailImg.png' 
import Paymanagir from '../Վեբ կայքի ստեղծման պայմանագիր.docx'
import '../Link.css';

class Form extends React.Component {
    constructor () {
        super()
        this.state = {
            checked : false,
        }
    }

    handleChange = () => {
        this.setState({
          checked: !this.state.checked
        })
      }

    render = () => {
        return (
            <div className="Form">
                <h3>
                    ՁԵՐ ՊԱՀԱՆՋՆԵՐԻ ԸՆԴՀԱՆՈՒՐ ՆԿԱՐԱԳՐՈՒԹՅՈՒՆ (ԼՐԱՑՈՒՑԻՉ ՄԵԿՆԱԲԱՆՈՒԹՅՈՒՆՆԵՐ)
                </h3>
    
                <textarea rows="10" placeholder="Հավելյալ նկարագրություն..." name="userDescription" />
    
                <h3>
                    ՀԱՎԵԼՅԱԼ ՓԱՍՏԱԹՂԹԵՐԻ ԿՑՈՒՄ (JPG, GIF, PNG, PDF, SWF, DOC(X), XLS(X), ZIP, RAR)
                </h3>
    
                <input type="file" name="file" />
    
                <h3>
                    ԱՆՁՆԱԿԱՆ ՏՎՅԱԼՆԵՐ
                </h3>
    
                <label>
                    <span>
                        <img alt="img" src={userNameImg} />
                        <b>Անուն</b> <strong>*</strong>
                    </span>
                    <input placeholder=" Ներմուծեք Ձեր Անունը." name="userName" type="text" required />
                </label>
    
                <label>
                    <span>
                        <img alt="img" src={userOrganizationNameImg} />
                        <b>Կազմակերպության անվանում</b>
                    </span>
                    <input placeholder=" Ներմուծեք Ձեր Կազմակերպության անվանումը." name="userOrganizationName" type="text" required />
                </label>
    
                <label>
                    <span>
                        <img alt="img" src={userMailImg} />
                        <b>E-mail</b> <strong>*</strong>
                    </span>
                    <input placeholder=" Ներմուծեք Ձեր E-mail-ը." name="userMail" type="text" required />
                </label>
    
                <label>
                    <span>
                        <img alt="img" src={userPhoneImg} />
                        <b>Հեռախոսահամար</b> <strong>*</strong>
                    </span>
                    <input placeholder=" Ներմուծեք Ձեր Հեռախոսահամարը." name="userPhone" type="text" required />
                </label>
    
                <label>
                    <input 
                        type="checkbox" 
                        ame="acceptContract"
                        onChange={ this.handleChange } />
                    <span>
                        Ես կարդացել և ընդունում եմ <strong><a href={Paymanagir} title="Ներբեռնել պայմանագրի օրինակը">պայմանագիրը</a> *</strong>
                    </span>
                </label>
    
                <span>
                    <strong>*</strong> - Պարտադիր դաշտեր
                </span>
                
                <div>
                    <button
                        disabled={ !this.state.checked }
                        title= "Հաստատեք, որ ծանոթացել և ընդունում եք պայմանագիրը:"
                        >Ուղարկել
                    </button>
                </div>
    
            </div>
        )
    }
}

export default Form;