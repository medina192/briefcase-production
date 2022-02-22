
import React, { useState, useEffect, useRef } from 'react';

import './main-background.css'
import ParticlesBackGround from './ParticlesBackGround/ParticlesBackGround';
import { BiMenu } from "react-icons/bi";

import axios from  'axios';
const serverPath = "http://localhost:3004";


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

    const downloadCV = async() => {
      
      axios.post( 
        serverPath+'/api/downloadCV', { responseType: 'blob' },
      )
      .then(response => {
        console.log('rrresponse ', response);
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'cv.pdf'); //or any other extension
        document.body.appendChild(link);
        link.click();

      })
      .catch( error => {
        console.log('error downloading cv', error);
      })
    

    }
    

    


    const openMenu = () => {

    }


  return (
      <div className='mb-con'>

        <ParticlesBackGround />
        
        <div className="mb-con-nab-bar">
            <p className='mb-my-name-anchor-link'>Alejandro<span>Díaz</span>Developer</p>
            <div className="mb-con-btn-navigate">
              <a href='#aboutMe' className='mb-anchor-link'>About me</a>
              <a href='#proyects' className='mb-anchor-link'>Proyects</a>
              <a href='#contact' className='mb-anchor-link'>Contact</a>
              <a href="https://ugtomx-my.sharepoint.com/:b:/g/personal/ja_diazmedina_ugto_mx/ERbAqokaub9Pl19pFlNMfu8BzqrPFVk48YFYyLhMxrYQWg?e=7cdh6n"
               target="_blank" rel="noreferrer" className='mb-anchor-link mb-show-cv'>Download CV</a>
            </div>
              <BiMenu onClick={ openMenu } className="hamburguer-icon"/>
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