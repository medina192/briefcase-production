import React, { useState, useRef } from 'react';
import './proyects.css';

import { proyectsData } from '../../proyectsData/proyectsData';
import ProyectCard from './ProyectCard/ProyectCard';

const Proyects = () => {

  const categorie = useRef({ name: 'All', selected: true})

  const [currentCategorie, setCurrentCategorie] = useState([
    { name: 'All', selected: true},
    { name: 'Web', selected: false},
    { name: 'Mobile', selected: false},]);

    const changeCategorie = (categorieName) => {


      setCurrentCategorie( currentCategorie.map( c => {
        let auxObject = {
          name: c.name,
          selected: false
        }
        if(c.name === categorieName)
        {
          auxObject.selected = true
          categorie.current = auxObject;
        }

        return auxObject
      }) )
    }

  return (
    <div id="proyects" className='p-con'>
        <div className="max-width-con">
            <h3 className='title'>Projects</h3>
            <div className="p-con-categories">
              {
                currentCategorie.map((categorie, index) => (                    
                <div key={index} onClick={() => changeCategorie(categorie.name)} className={`p-con-categorie ${categorie.selected ? 'p-categorie-text-selected' : '' }`}>
                  <p className="p-categorie-text">{categorie.name}</p>
                </div>))
              }
            </div>
            <div className="p-con-grid-flex">
              {
                
                proyectsData.map( (proyect, indexProyect) => {
                  if(categorie.current.name === 'All')
                    return (<ProyectCard key={ indexProyect } proyectInfo={ proyect } />)
                  else if(proyect.category === categorie.current.name)
                    return (<ProyectCard key={ indexProyect } proyectInfo={ proyect } />)
                })
              }
            </div>
        </div>
    </div>
  );
};

export default Proyects;
