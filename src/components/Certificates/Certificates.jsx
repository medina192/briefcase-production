import React, { useEffect, useRef} from 'react'
import './certificates.css';
import '../Proyects/ProyectCard/proyect-card.css';

const Certificates = () => {



  return (
    <div>
      <div className="max-width-con">
        <h3 className='title'>Certificates</h3>
        <div className="c-con-certificates">
          <div className="p-con-grid-flex">
            
            <div className='pc-card'>

              <img src="./img/academlo.jpg" className="pc-web-image c-img-higher" alt="proyect" />
              <p className='pc-proyect-name'>Academlo</p>
              <button onClick={() => {
                window.open('https://certificates.academlo.com/en/verify/33568611572646?ref=email', '_blank');
              }} className='pc-showInfo-btn'>
                    See certificate
              </button>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificates