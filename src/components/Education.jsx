import React from 'react'

const languages = [
  {
    language: 'Spanish',
    level: 'Native'
  },
  {
    language: 'English',
    level: 'Medium-High (TOEFL: 597)'
  },
]

export const Education = ({
  id
}) => {
  return (
    <div className='container education-container' id={id}>
        <h1>Education</h1>
        <hr />
        <h4><b>Artificial Intelligence Engineering</b></h4>
        <h5>Universidad Panamericana</h5>
        <span>08/2019 - Present</span>
        <br />
        <br />
        <h1>Languages</h1>
        <hr />
        <ul>
          {
            languages.map( language => {
              return <li key={language.language}>{language.language}: {language.level}</li>
            })
          }
        </ul>
    </div>
  )
}
