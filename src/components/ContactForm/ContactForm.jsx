import React, {  } from 'react';
import './contact-form.css';

import { 
         BsFillEnvelopeFill, 
         BsWhatsapp, 
         BsFillGeoAltFill,
         BsLinkedin,
         BsFacebook, 
         BsGithub,
          } from "react-icons/bs";
import Form from './Form/Form';

const ContactForm = () => {


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

                        <Form />

                    </div> {/* end right left con */}
                    
                </div>
            </div>
        </div>
    );
}

export default ContactForm;