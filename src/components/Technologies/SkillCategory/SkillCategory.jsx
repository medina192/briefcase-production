import React from 'react'
import CardCategory from '../CardCategory/CardCategory';
import './skill-category.css';

const SkillCategory = ({skillCategory}) => {
  return (
    <div className='sc-con-tech-category'>
        <h4 className='sc-title-tech-category'>{skillCategory.title}</h4>
        <div className="sc-con-cards-tech">
            {
                skillCategory.technologies.map((technology) => {

                    return(
                        <CardCategory key={technology.id} technology={technology} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default SkillCategory