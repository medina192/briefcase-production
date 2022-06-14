import React from 'react';
import { BsCheckCircle } from "react-icons/bs";
import './modal-email-send.css'

const ModalEmailSend = ({ setshowModalEmail }) => {

    const dismiss = () => {
        setshowModalEmail(false)
    }

  return (
    <div className='mes-con-opacity'>
        <div className="mes-card">
            <BsCheckCircle className='mes-icon-check' />
            <p className='mes-text-bold'>Your email was sent </p>
            <p className='mes-text-bold mes-margin'>succesfully</p>
            <p className='mes-text'>I will respond you soon</p>
            <button onClick={dismiss} className='mes-btn-dismiss'>
                Dismiss
            </button>
        </div>
    </div>
  )
}

export default ModalEmailSend