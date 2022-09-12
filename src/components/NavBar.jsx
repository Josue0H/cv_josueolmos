import React from 'react'
import { SocialIcon } from 'react-social-icons'

export const NavBar = ({
  handleClick
}) => {
  return (
    <div className='nav-bar'>
        <h3>Josué Olmos</h3>
        <h6>Artificial Intelligence Engineer</h6>
        <ul>
            <li className='nav-link p-1' onClick={() => handleClick('home')}>Home</li>
            <li className='nav-link p-1' onClick={() => handleClick('work')}>Work</li>
            <li className='nav-link p-1' onClick={() => handleClick('education')}>Education</li>
            <li className='nav-link p-1' onClick={() => handleClick('skills')}>Skills</li>
            <li className='nav-link p-1' onClick={() => handleClick('interests')}>Interests</li>
            <li className='nav-link p-1' onClick={() => handleClick('contact')}>Contact</li>
        </ul>
        <ul className='ul-social-media'>
            <SocialIcon url='https://github.com/Josue0H' className='icon' bgColor='rgb(49, 60, 78)' fgColor='white'/>
            <SocialIcon url='https://www.linkedin.com/in/josu%C3%A9-olmos-03ab1a242/' className='icon' bgColor='rgb(49, 60, 78)' fgColor='white'/>
        </ul>
    </div>
  )
}
