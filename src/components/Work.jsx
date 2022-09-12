import React from 'react'
import logo from '../res/aidev_logo_png.png';

export const Work = ({
  id
}) => {
  return (
    <div className='container work-container p-5' id={id}>
        <h1>Work</h1>
        <hr />
        <h4><b>MERN Developer</b></h4>
        <h5>at AiDev Technologies</h5>
        <span>02/2021 - Present</span>
        <p>Full stack development, design and maintainance of multiple web applications, looking for their responsiveness and scalability using MERN stack. </p>
        <span>Achievements / Tasks</span>
        <ul className='ul-tasks'>
            <li>Model, planning and design of Web Applications. </li>
            <li>Deployment and maintainance.</li>
            <li>Direct customer interaction to improve the projects.</li>
        </ul>
        <img src={logo} alt="aidev" className='work-logo'/>
    </div>
  )
}
