import React from 'react'
import picture from '../res/profile.jpeg'
import cv from '../res/CV_JosueOlmos.pdf'

export const Home = ({
  id
}) => {

    const handleDownloadCv = () => {
        const link = document.createElement('a');
        link.href = cv
        link.download = 'CV_JosueOlmos.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

  return (
    <div className='container home-container' id={id}>
        <img src={picture} alt="Josue Olmos" className='profile-img'/>
        <h1>Josué Olmos Hernández</h1>
        <p>AI Student with ease learning, communicating and developing projects in a team.</p>
        <button className='btn-blue' onClick={handleDownloadCv}>Download CV</button>
    </div>
  )
}
