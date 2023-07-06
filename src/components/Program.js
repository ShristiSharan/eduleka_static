import React from 'react';
import './css/Program.css';
import absent from '../assets/absent.png'
import fam from '../assets/happy.png'
import building from '../assets/office-building.png'
import question from '../assets/question.png'
import doubts from '../assets/question.png'


const blocks =[
    { heading: 'Missed a class?', subheading: 'Watch the recording later, with teaching assistants available to solve your doubts' ,Img:absent },
    { heading: 'Work / family needs time?', subheading: 'Pause your course and restart a month later with the next batch!',Img:fam},
    { heading: 'Jobs & class timings clash?', subheading: 'This is the third block',Img:building },
    { heading: 'Want to revise?', subheading: 'This is the fourth block',Img:question },
    { heading: 'Have doubts?', subheading: 'This is the fifth block',Img:doubts},
  ]

const Program = ()=>{
    return(
        <div className="container">
            <div className="Heading">
                <h1>We have designed a flexible program for you</h1>
            </div>
            <div className="grid-containers">

        {blocks.map((block,index) => (
          <div key={index} >
            <div className="block">
            <img src={blocks.favicon} alt="Favicon" className="Img" />
            <h2>{block.heading}</h2>
            <p>{block.subheading}</p>
          </div>
          </div>
                ))}
                </div>
      </div> 
             
        

            )
}

export default Program;
