import React from 'react';
import './technologies.css';
import { skillsData } from '../../proyectsData/skillsTechData';
import SkillCategory from './SkillCategory/SkillCategory';

const Technologies = () => {


  return (
    <div className='t-con-tech'>
        <div className='max-width-con'>
          <h3 className='title'>Technical Skills</h3>
          <div className='line'></div>
          <div className='t-con-tech-data'>
            {
              skillsData.map((skillCategory) => {

                return(
                  <SkillCategory key={ skillCategory.id } skillCategory={ skillCategory } />
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default Technologies