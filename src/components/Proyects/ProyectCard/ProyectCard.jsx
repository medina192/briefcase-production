import React, { useState } from 'react';
import './proyect-card.css';

/*

Using target="_blank" without rel="noreferrer" (which implies rel="noopener") is a security risk in
 older browsers: see https://mathiasbynens.github.io/rel-noopener/#recommendationseslintreact/jsx-no-target-blank
*/

const ProyectCard = ({ proyectInfo }) => {

    const [showAllCard, setShowAllCard] = useState(false);

    const { innerWidth: width, innerHeight: height } = window;

    return(
        <div //onMouseEnter={() => setShowAnimation(true) } 
             //onMouseLeave={() => setShowAnimation(false) } 

             className={ `pc-card ${ (showAllCard && width < 500) ? 
                '' : ''}`  }>

            <img src={proyectInfo.urlImage} className="pc-web-image" alt="proyect" />
            
            <p className='pc-proyect-name'>{ proyectInfo.name }</p>

            {
                width < 500 ? 
                (
                    <button onClick={() => setShowAllCard(true)} className='pc-showInfo-btn'>
                        More Info...
                    </button>
                )
                :
                (
                    <>
                    </>
                )
            }

            <p className='pc-description'>{ proyectInfo.description }</p>
            <p className='pc-tech-use-title'>Used Technologies</p>

            <div className="pc-line-tech-used"></div>
            <div className="pc-con-tech-img">
                {
                    proyectInfo.technologies.map(( techImg, index) => {
  
                        return(
                            <img src={ techImg.urlImage } key={ index } className="pc-tech-image" alt="tech" />
                        )
                    })
                }
            </div>

            <p className='pc-title-link'>Web site Link</p>
            <a href={proyectInfo.urls[0].url} target="_blank" rel="noreferrer" className='pc-link'>
                { proyectInfo.urls[0].url }</a>

            {
                proyectInfo.urls[1].available ?
                (
                    <>
                        <p className='pc-title-link'>GitHub repo Link</p>
                        <a href={proyectInfo.urls[1].url} target="_blank" rel="noreferrer" className='pc-link'>
                            { proyectInfo.urls[1].url }</a>
                    </>
                )
                :
                (
                    <></>
                )
            }

{
                showAllCard ? 
                (
                    <button onClick={() => setShowAllCard(false)} className='pc-showInfo-btn'>
                        Close
                    </button>
                )
                :
                (
                    <>
                    </>
                )
            }

        </div>
    );
}

export default ProyectCard;