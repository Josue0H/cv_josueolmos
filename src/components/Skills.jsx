import React from 'react'
import SkillBar from 'react-skillbars';

const skills = ['MongoDB', 'ReactJS', 'NodeJS', 'Machine Learning', 'Git', 'SCRUM', 'Heroku', 'MySQL', 'Express', 'NGINX', 'Deployment'];

const programmingSkills = [
    {
        type: 'Javascript',
        level: 95
    },
    {
        type: 'React',
        level: 80
    },
    {
        type: 'Python',
        level: 70
    },
    {
        type: 'NestJS',
        level: 50
    }
] 

const colors = {
    bar: "#5C706F",
    title: {
      text: "#fff",
      background: "#313C4E"
    }
  };


export const Skills = ({
    id
}) => {
  return (
    <div className='container skills-container p-5' id={id}>
        <h1>Skills</h1>
        <hr/>
        <div className=''>
            {
                skills.map( skill => {
                    return <h5 className='skill' key={skill}>{skill}</h5>
                })
            }
        </div>
        <br />
        <br />
        <div className='mt-5'>
            <h4>Programming Languages</h4>
            <hr/>
            <div>
                <SkillBar skills={programmingSkills} height={'3vh'} animationDuration={2000} animationThreshold={0.8} colors={colors}/>
            </div>
        </div>
    </div>
  )
}
