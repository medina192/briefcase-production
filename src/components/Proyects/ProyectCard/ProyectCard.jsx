import React from 'react';
import './proyect-card.css';

const ProyectCard = ({ proyectInfo }) => {



    return(
        <div //onMouseEnter={() => setShowAnimation(true) } 
             //onMouseLeave={() => setShowAnimation(false) } 
             className={ 'pc-card'  }>

            <img src={proyectInfo.urlImage} className="pc-web-image" alt="proyect" />
            
            <p className='pc-proyect-name'>{ proyectInfo.name }</p>
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
            <p className='pc-link'>{ proyectInfo.urls[0].url }</p>

            {
                proyectInfo.urls[1].available ?
                (
                    <>
                        <p className='pc-title-link'>GitHub repo Link</p>
                        <p className='pc-link'>{ proyectInfo.urls[1].url }</p>
                    </>
                )
                :
                (
                    <></>
                )
            }

        </div>
    );
}

export default ProyectCard;