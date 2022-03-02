import React, { useRef, useEffect, useState } from 'react';
import './my-description.css'

const MyDescription = () => {

    const conVisible = useRef(null);
    const [showAnimationImage, setShowAnimationImage] = useState(false);
    const [showAnimationText, setShowAnimationText] = useState(false);

    const listenerScroll = (e) => {

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const handleScroll = (e) => {
        const yTop = conVisible.current.getBoundingClientRect().top;
        const { innerWidth: width, innerHeight: height } = window;


        if(width > 500)
        {
            setShowAnimationImage(true);
            setShowAnimationText(true);
        }
        else{
            if(yTop < (0.6 * height))
            {
                setShowAnimationImage(true);
            }
            if(yTop < (0.3 * height))
            {
                setShowAnimationText(true);
            }
        }
    }
    

    return (
        <div ref={conVisible} id="aboutMe" className="my-con-description">
            <div className="my-max-width-con">
                <h3 className='title'>About Me</h3>
                <div className='line'></div>
                <div className="my-con-items-description">
                    <img src='/img/my_image.jpg' 
                        className={`my-image ${showAnimationImage ? 'my-image-animation' : ''}`} 
                        alt="me"  />
                    <div className="my-con-about-me">
                        <p 
                            className={`my-text-about-me ${showAnimationText ? 'my-text-about-me-animation' : ''}`} 
                            >
                                ¡Hello!, my name is 
                                <span className='md-highlight-text'> José Alejandro Díaz Medina </span>
                                and i am a <span className='md-highlight-text'>Full Stack developer </span>
                                (Frontend, Backend) and 
                                 <span className='md-highlight-text'> Mobile developer </span>
                                 (iOS and Android applications)
                                 specialized in javascript technologies (React, React-Native and NodeJs).
                                <br/>
                                <br/>
                                I studied mechatronics engineering at the same time i was learning to create
                                web and mobile applications, taking courses from platforms like Platzi and Udemy,
                                and the Academlo´s Bootcamp. 
                                <br/>
                                <br/>
                                I have business experience with React-Native, NodeJs and MYSQL, I used all of 
                                them when i did my professional practices in the company 
                                <span className='md-highlight-text'> Codeway Solutions. </span>
                                 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyDescription
