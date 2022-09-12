import React, { useRef } from 'react'
import './cv.css'
import { NavBar, Home } from './'
import { Work } from './Work'
import { Education } from './Education'
import { Skills } from './Skills'
import { Contact } from './Contact'
import { Interests } from './Interests'

export const CVHome = () => {

    const componentRef = useRef(null);

    const handleClick = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    }

  return (
    <div className='container'>
        <div className='row container'>
            <div className='col-md-4'>
                <NavBar handleClick={handleClick}></NavBar>
            </div>
            <div className='col-md'>
                <Home id='home'/>
                <Work id='work'/>
                <Education id='education'/>
                <Skills id='skills'/>
                <Interests id='interests'/>
                <Contact id='contact'/>
            </div>
        </div>
    
    </div>
  )
}
