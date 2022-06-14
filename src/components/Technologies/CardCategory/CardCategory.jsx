import React from 'react';
import './card-category.css';


const CardCategory = ({ technology }) => {
  return (
    <div className="cc-card">
      <img className='logo-skill-img' src={technology.imgUrl} alt={ technology.name } />
      <p className='cc-tech-name'>{ technology.name }</p>
    </div>
  )
}

export default CardCategory