import React from 'react'
import './more-information-card.css';
import { BsArrowRight, BsFillExclamationOctagonFill, BsFillXCircleFill } from "react-icons/bs";

const MoreInformationCard = ({ setShowMoreInfo, proyectInfo }) => {

  const { name, description, technologies, urlWebSite, urlGitHubRepo, playStoreLink,
          appStoreLink  } = proyectInfo;

  return (
    <div className='mic-con-opacity'>
      <div className="mic-aux-con-card">
        <div className="mic-card">
            <BsFillXCircleFill onClick={ () => setShowMoreInfo(false) } className="p-close-icon" />
            <p className='mic-proyect-name'>{name}</p>
            <p className='mic-description'>{description}</p>

            <p className='mic-tech-use-title'>Used Technologies</p>
            <div className="mic-line-tech-used"></div>

            <div className="mic-con-tech-img">
                {
                    technologies.map(( techImg, index) => {
  
                        return(
                            <div className='mic-con-tech' key={ index }>
                              <img src={ techImg.urlImage }  className="mic-tech-image" alt="tech" />
                              <p className='mic-text-tech'>{ techImg.name }</p>
                            </div>
                        )
                    })
                }
            </div>
            {
              proyectInfo.notResponsive && (
                <div className='center'>
                  <BsFillExclamationOctagonFill className='alert-icon'/>
                  <p className='not-responsive'>{proyectInfo.notResponsive}</p>
                </div>
              )
            }

            {
              proyectInfo.message && 
                <div className='center'>
                  <p className='not-responsive'>{proyectInfo.message}</p>
                </div>
            }

            {
              urlWebSite ? 
              (
                <div className='mic-con-link'>
                    <a href={urlWebSite} target="_blank" rel="noreferrer" className='mic-link'>
                    Web site Link</a>
                    <BsArrowRight className='mic-arrow-link' />
                </div>
              ):(<></>)
            }

            {
              urlGitHubRepo ? 
              (
                <div className='mic-con-link'>
                    <a href={urlGitHubRepo} target="_blank" rel="noreferrer" className='mic-link'>
                      Github repo link</a>
                    <BsArrowRight className='mic-arrow-link' />
                </div>
              ):(<></>)
            }

            { 
              playStoreLink ? 
              (
                <div className='mic-con-link'>
                    <a href={playStoreLink} target="_blank" rel="noreferrer" className='mic-link'>
                    Play Store Link</a>
                    <BsArrowRight className='mic-arrow-link' />
                </div>
              ):(<></>)
            }

{ 
              appStoreLink ? 
              (
                <>
                  <p className='mic-title-link'>App Store Link</p>
                    <a href={appStoreLink } target="_blank" rel="noreferrer" className='mic-link'>
                    {appStoreLink  }</a>
                </>
              ):(<></>)
            }

            <button onClick={ () => setShowMoreInfo(false) } className='mic-btn-close-card'>
                Close
            </button>
        </div>
      </div>
    </div>
  )
}

export default MoreInformationCard