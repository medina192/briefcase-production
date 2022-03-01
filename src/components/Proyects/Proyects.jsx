import React, { useState } from 'react';
import './proyects.css';

import { proyectsData } from '../../proyectsData/proyectsData';
import ProyectCard from './ProyectCard/ProyectCard';

const Proyects = () => {

  

  return (
    <div id="proyects" className='p-con'>
        <div className="max-width-con">
            <h3 className='title'>Proyects</h3>
            <div className='line'></div>
            <div className="p-con-grid-flex">
              {
                proyectsData.map( (proyect, indexProyect) => {
                  
                  return(
                    <ProyectCard key={ indexProyect } proyectInfo={ proyect } />
                  )
                })
              }
            </div>
        </div>
    </div>
  );
};

export default Proyects;
