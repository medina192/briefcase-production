import React, { useState } from 'react';
import './lateral-menu.css';
import { BsFillXCircleFill, 
         BsFillEnvelopeFill,
         BsFillFileEarmarkPdfFill, 
         BsFillFolderFill, 
         BsFillPersonFill
        } from "react-icons/bs";
         

const LateralMenu = React.memo(({ setShowlateralMenu }) => {


  const hideLateralMenu = (e, anchorLink) => {
      e.preventDefault();
      console.log(e, anchorLink)

      if(anchorLink === 'justCloseMenu')
      {
        setShowlateralMenu(false);
        return;
      }
      else if(anchorLink)
      {

        //window.scrollTo(0, 200);
        window.location.href = '#'+anchorLink;
      }
      else{
        window.location.href = "https://alexdiazdeveloper.com/cv.pdf";
      }

      setShowlateralMenu(false);
  }

  /*
    var top = document.getElementById(h).offsetTop; //Getting Y of target element
  window.scrollTo(0, top); //Go there directly or some transition
  */

  return (
    <div  className='lm-background-opacity'>
      <div className={`lm-animation-menu`}>
        <div className="lm-con-lateral-menu">
          
          <div className="lm-con-image-name">
            <img  src='/img/cv_image.jpg' className='lm-circular-image' alt='me' />
            <div className="lm-con-text-name">
              <p>Alejandro</p>
              <p><span>Díaz</span></p>  
            </div>
          </div>


          <div className="lm-con-links">
            <div onClick={(e) => hideLateralMenu(e, 'aboutMe') } className='lm-con-text-link'>
              < BsFillPersonFill className='lm-icon-link'/>
              <a href="aboutMe"  className='lm-text-link' >About Me</a>
            </div>
            <div onClick={ (e) => hideLateralMenu(e, 'proyects') } className='lm-con-text-link'>
              < BsFillFolderFill className='lm-icon-link'/>
              <a href="proyect"  className='lm-text-link' >Proyects</a>
            </div>
            <div onClick={ (e) => hideLateralMenu(e, 'contact') } className='lm-con-text-link'>
              < BsFillEnvelopeFill className='lm-icon-link'/>
              <a href="#contact"  className='lm-text-link' >Contact Me</a>
            </div>
            <div onClick={ (e) => hideLateralMenu(e, null) } className='lm-con-text-link'>
              < BsFillFileEarmarkPdfFill className='lm-icon-link'/>
              <a href="https://alexdiazdeveloper.com/cv.pdf" target="_blank" className='lm-text-link' rel="noreferrer">Download CV</a>
            </div>
          </div>
        </div>
      
        <div className={`ml-close-lateral-menu `} onClick={(e) => hideLateralMenu(e, 'justCloseMenu') } >
          <BsFillXCircleFill />
        </div>
      </div>
    </div>
  )
})

export default LateralMenu