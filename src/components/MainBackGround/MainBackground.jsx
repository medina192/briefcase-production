
import React, { useState, useEffect, useRef } from 'react';

import './main-background.css'
import ParticlesBackGround from './ParticlesBackGround/ParticlesBackGround';

//https://www.wallpaperflare.com/search?wallpaper=binary
// https://particles.js.org/docs/interfaces/Options_Interfaces_Background_IBackground.IBackground.html

// typing effects
// https://www.codesdope.com/blog/article/12-creative-css-and-javascript-text-typing-animati/

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return width;
  }
  

const MainBackground = () => {

    const [changeTypeText, setchangeTypeText] = useState('Frontend: React Js');
    const [widthScreen, setSidthScreen] = useState(getWindowDimensions);

    console.log('width', widthScreen);

    useEffect(() => {
      
        /*
        setTimeout(() => {
            setchangeTypeText('Backend: Node Js')
        }, 5100);

        
        setTimeout(() => {
            setchangeTypeText('Mobile: React-Native, Kotlin')
        }, 10600);

        setTimeout(() => {
            setchangeTypeText('Alejandro Díaz Developer')
        }, 15700);
        */

    window.addEventListener('resize', () => {
    });
      return () => {
        
      }
    }, [])
    


  return (
      <div className='mb-con'>

        <ParticlesBackGround />
        
        <div className="mb-con-nab-bar">
            <p className='mb-my-name-anchor-link'>Alejandro<span>Díaz</span>Developer</p>
            <div className="mb-con-btn-navigate">
              <a href='#aboutMe' className='mb-anchor-link'>About me</a>
              <a href='#proyects' className='mb-anchor-link'>Proyects</a>
              <a href='#contact' className='mb-anchor-link'>Contact</a>
              <p className='mb-anchor-link mb-show-cv'>Download CV</p>
            </div>
        </div>

        <div className="mb-opacity-background"></div>
        
        <div className="mb-con-titles">
            
            {
              widthScreen > 500?
              (
                <h1 className='mb-title-developer'>
                 Full Stack Javascript Developer
                </h1>
              ) 
              :
              (
                <h1 className='mb-title-developer'>
                    &nbsp;
                    &ensp;
                    &ensp;
                    &ensp;
                    Full Stack 
                    <br />
                    Javascript 
                    Developer
                </h1>
              )
            }


            <div className='mb-con-typing-letters'>
            {
              widthScreen > 500?
              (
                <p className='mb-text-typing-1'>
                  Alejandro Díaz Developer
                </p>
              ) 
              :
              (
                <p className='mb-text-typing-1'>
                  
                   Alejandro 
                <br />
                  &nbsp;
                  &ensp;
                   Diaz 
                 <br />
                Developer
                </p>
              )
            }
                <div className='mb-animate-cursor'></div>
            </div>

            <p className='mb-aux-text'>{'Nothing'}</p>
        </div>

     </div>
  );
};

export default MainBackground;

/*

            <div className='con'>
                <p className='pp'>hola como estas?</p>
                <div className='cur'></div>
            </div>

            .con{
    background-color: #61dafb;
    padding: 5rem;
    display: flex;
    justify-content: center;
  }
  
  .pp{
    width: 55rem;
    white-space: nowrap;
    overflow: hidden;
    font-size: 7rem;
    background-color: aliceblue;
    animation: key-pp 1.5s steps(16, end) 1s 1 normal,
               key-pp 1.5s steps(16, end) 5s 1 reverse
              
               cursor .312s steps(2, end) 1s infinite;
            
  }
  
  .cur{
    margin-left: 1rem;
    width: 10px;
    height: 6rem;
    background-color: black;
    animation: custom-cursor .3s steps(2, end) 1s infinite alternate;
  }
*/