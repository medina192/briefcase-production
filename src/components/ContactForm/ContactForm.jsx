import React, { useRef, useState } from 'react';
import './contact-form.css';

import { 
         BsFillEnvelopeFill, 
         BsWhatsapp, 
         BsFillGeoAltFill,
         BsLinkedin,
         BsFacebook, 
         BsGithub,
          } from "react-icons/bs";

const ContactForm = () => {

    const inputValues = useRef({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [ inputsErros, setInputsErrors ] = useState({
        name: { show: false, errorMessage: ''},
        email: { show: false, errorMessage: ''},
        subject: { show: false, errorMessage: ''},
        message: { show: false, errorMessage: ''},
    });

    const saveInputValue = (e) => {

        const input = e.target;

        switch ( input.name ) {
            case 'name':
                inputValues.current['name'] = input.value;
            break;
            case 'email':
                inputValues.current['email'] = input.value;
            break;
            case 'subject':
                inputValues.current['subject'] = input.value;
            break;
            case 'message':
                inputValues.current['message'] = input.value;
            break;
        
            default:
                break;
        }
    }


    const sendEmail = () => {

        if(inputsAreEmpty)
            return;
        else{
            // send email
        }

    }

    const inputsAreEmpty = () => {

        const auxInputsErros = {
            name: { show: false, errorMessage: ''},
            email: { show: false, errorMessage: ''},
            subject: { show: false, errorMessage: ''},
            message: { show: false, errorMessage: ''},
        };
        let isError = false;

        for(const inputName in inputValues.current)
        {
            if(inputValues.current[inputName] === '')
            {
                auxInputsErros[inputName].show = true;
                auxInputsErros[inputName].message = `You must write 
                ${inputName.slice(0,1).includes('a','e','i','o','u') ? 'an' : 'a' } ${inputName}`;
                isError = true;
            }
        }

        setInputsErrors(auxInputsErros);

        return isError;
    }


    return(
        <div id="contact" className='cf-con'>
            <div className="max-width-con">
                <div className="cf-con-form-icons">

                    <p className='cf-form-title'>Contact me</p>

                    <div className="cf-con-left-right">
                        
                        <div className="cf-flex-con-left">
                            <div className="cf-con-grid-icons">
                                    <BsFillEnvelopeFill className='cf-icon-grid' />
                                    <p className='cf-text-icon-grid'>ja.diazmedina@ugto.mx</p>
                                    <BsWhatsapp className='cf-icon-grid' />
                                    <p className='cf-text-icon-grid'>(+52) 352-105-67-73</p>
                                    <BsFillGeoAltFill className='cf-icon-grid' />
                                    <p className='cf-text-icon-grid'>Michoacán, México</p>
                            </div>
                            <div className="cf-con-flex-icons">
                                    <div className="cf-con-icon-flex"><BsLinkedin className='cf-icon-flex' /></div>
                                    <div className="cf-con-icon-flex"><BsFacebook className='cf-icon-flex' /></div>
                                    <div className="cf-con-icon-flex"><BsGithub className='cf-icon-flex' /></div>
                            </div>
                        </div>

                        <form onSubmit={ sendEmail } className="cf-con-form-right">
                            <input type='text' className='cf-text-input' 
                                    placeholder='Name'
                                    name='name'
                                    onChange={saveInputValue}/>
                            <input type='text' className='cf-text-input' 
                                    placeholder='Your email contact'
                                    name='email'
                                    onChange={saveInputValue}/>
                            <input type='text' className='cf-text-input' 
                                    placeholder='Subject'
                                    name='subject'
                                    onChange={saveInputValue} />
                            <textarea rows="4" cols="50" className='cf-text-area-input' 
                                      placeholder='Message'
                                      name='message'
                                      onChange={saveInputValue}> 
                            </textarea>
                            <button onClick={ sendEmail } className='cf-send-email-btn'>
                                Send
                            </button>
                        </form>

                    </div> {/* end right left con */}
                    
                </div>
            </div>
        </div>
    );
}

export default ContactForm;