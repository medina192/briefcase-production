import React from 'react';
import { BsFillEnvelopeFill, BsCheckCircleFill, } from "react-icons/bs";
import './modal-email-send.css'

const ModalEmailSend = ({ setshowModalEmail }) => {

    const dismiss = () => {
        setshowModalEmail(false)
    }

  return (
    <div className='mes-con-opacity'>
        <div className="mes-card">
            <p className='mes-text'>Your email was sent succesfully¡</p>
            <BsCheckCircleFill className='mes-icon-check' />
            <p className='mes-text'>I will respond you as fazt i can</p>
            <button onClick={dismiss} className='mes-btn-dismiss'>
                Dismiss
            </button>
        </div>
    </div>
  )
}

export default ModalEmailSend