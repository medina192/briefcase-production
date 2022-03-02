import React from 'react';
import './card-category.css';
import { BsFillCheckCircleFill } from "react-icons/bs";



const CardCategory = ({ technology }) => {
  return (
    <div className="cc-card">
      {
        /*
              <BsFillCheckCircleFill className='cc-icon' />
        */
      }
      <p className='cc-tech-name'>{ technology.name }</p>
    </div>
  )
}

export default CardCategory