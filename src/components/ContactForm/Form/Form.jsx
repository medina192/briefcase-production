import React, { useRef, useState } from 'react';
import '../contact-form.css';

import axios from  'axios';

import { proUrl, envUrl } from '../../../urlDomain';
import ModalEmailSend from '../ModalEmailSend/ModalEmailSend';

const serverPath = proUrl;



const Form = () => {

    const [showModalEmail, setshowModalEmail] = useState(false)

    const [inputsValues, setInputsValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });


    const [ inputsErrors, setInputsErrors ] = useState({
        name: { show: false, errorMessage: ''},
        email: { show: false, errorMessage: ''},
        subject: { show: false, errorMessage: ''},
        message: { show: false, errorMessage: ''},
    });



    const saveInputValue = (e) => {

        const input = e.target;

        switch ( input.name ) {
            case 'name':
                setInputsValues({
                    ...inputsValues,
                     name: input.value
                })
            break;
            case 'email':
                setInputsValues({
                    ...inputsValues,
                     email: input.value
                })
            break;
            case 'subject':
                setInputsValues({
                    ...inputsValues,
                     subject: input.value
                })
            break;
            case 'message':
                setInputsValues({
                    ...inputsValues,
                     message: input.value
                })
            break;
        
            default:
                break;
        }
    }


    const inputsAreEmpty = () => {

        
        const auxInputsErrors = {
            name: { show: false, errorMessage: ''},
            email: { show: false, errorMessage: ''},
            subject: { show: false, errorMessage: ''},
            message: { show: false, errorMessage: ''},
        };
        let isError = false;

        for(const inputName in inputsValues)
        {   
            if(inputsValues[inputName] === '')
            {
                auxInputsErrors[inputName].show = true;
                auxInputsErrors[inputName].errorMessage = `You must write ${['a','e','i','o','u'].some((arg) => { return arg === inputName.slice(0,1)}) ? 'an' : 'a' } ${inputName}`;
                isError = true;
            }
        }
        setInputsErrors(auxInputsErrors);

        return isError;
        
    }

    
    
    const sendEmail = async(e) => {

        const body = {
            from: inputsValues.email,
            subject: inputsValues.subject,
            name: inputsValues.name,
            text: inputsValues.message
        }


        e.preventDefault();
        if(inputsAreEmpty())

            return;
        else{
             axios.post( 
                'https://alexdiazdeveloper.com/api/sendemail',
                body,
              )
              .then( res => {
                setInputsValues({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setshowModalEmail(true);
              })
              .catch( error => {
                console.log('error sending email ', error);
              })


        }

    }

    const removerErrorMessage = (e) => {
        const input = e.target;

        switch ( input.name ) {
            case 'name':
                setInputsErrors({
                    ...inputsErrors,
                    name: { show: false, errorMessage: ''}
                })
            break;
            case 'email':
                setInputsErrors({
                    ...inputsErrors,
                    email: { show: false, errorMessage: ''}
                })
            break;
            case 'subject':
                setInputsErrors({
                    ...inputsErrors,
                    subject: { show: false, errorMessage: ''}
                })
            break;
            case 'message':
                setInputsErrors({
                    ...inputsErrors,
                    message: { show: false, errorMessage: ''}
                })
            break;
        
            default:
                break;
        }
    }



  return (
        <form id="form-email" onSubmit={ sendEmail } className="cf-con-form-right">
            <input type='text' className='cf-text-input' 
                    value={inputsValues.name}
                    placeholder='Name'
                    name='name'
                    onFocus={removerErrorMessage}
                    onChange={saveInputValue}/>
                    {
                        inputsErrors.name.show ? 
                        (<p className='cf-error-text'>{inputsErrors.name.errorMessage}</p>):
                        (<></>)
                    }

            <input type='text' className='cf-text-input' 
                    value={inputsValues.email}
                    placeholder='Your email contact'
                    name='email'
                    onFocus={removerErrorMessage}
                    onChange={saveInputValue}/>
                    <p className='cf-error-text'></p>
                    {
                        inputsErrors.email.show ? 
                        (<p className='cf-error-text'>{inputsErrors.email.errorMessage}</p>):
                        (<></>)
                    }

            <input type='text' className='cf-text-input' 
                    value={inputsValues.subject}
                    placeholder='Subject'
                    name='subject'
                    onFocus={removerErrorMessage}
                    onChange={saveInputValue} />
                    {
                        inputsErrors.subject.show ? 
                        (<p className='cf-error-text'>{inputsErrors.subject.errorMessage}</p>):
                        (<></>)
                    }


            <textarea rows="4" cols="50" className='cf-text-area-input' 
                    value={inputsValues.message}
                    placeholder='Message'
                    name='message'
                    onFocus={removerErrorMessage}
                    onChange={saveInputValue}> 
            </textarea>
                    {
                        inputsErrors.message.show ? 
                        (<p className='cf-error-text'>{inputsErrors.message.errorMessage}</p>):
                        (<></>)
                    }

            <button onClick={ sendEmail } className='cf-send-email-btn'>
                Send
            </button>
            {
                showModalEmail ? 
                ( <ModalEmailSend setshowModalEmail={ setshowModalEmail } />)
                :(<></>)
            }
        </form>
  )
}

export default Form