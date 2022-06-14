/* eslint-disable jsx-a11y/anchor-has-content */
import React, {  } from 'react';
import './contact-form.css';

import { 
         BsFillEnvelopeFill, 
         BsWhatsapp, 
         BsFillGeoAltFill,
         BsLinkedin,
         BsFacebook, 
         BsGithub,
         BsCodeSlash,
         BsFillTelephoneFill
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
                                    <a target="_blank" href='https://api.whatsapp.com/send?phone=523521056773' 
                                      className='cf-text-icon-grid cf-cursor-pointer' rel="noreferrer">(+52) 352-105-67-73</a>
                                    <BsFillGeoAltFill className='cf-icon-grid' />
                                    <p className='cf-text-icon-grid'>Michoacán, México</p>
                            </div>
                            <div className="cf-con-flex-icons">
                                    <a className="cf-a" href='https://www.linkedin.com/in/jose-alejandro-diaz-medina-b77971137/?locale=en_US' target="_blank" rel="noreferrer">
                                      <div className="cf-con-icon-flex"><BsLinkedin className='cf-icon-flex' /></div>
                                    </a>
                                    <a className="cf-a" href='https://www.facebook.com/josealejandro.diazmedina.1/' target="_blank" rel="noreferrer">
                                      <div className="cf-con-icon-flex"><BsFacebook className='cf-icon-flex' /></div>
                                    </a>
                                    <a className="cf-a" href='https://github.com/medina192' target="_blank" rel="noreferrer">
                                      <div className="cf-con-icon-flex"><BsGithub className='cf-icon-flex' /></div>
                                    </a>
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