import React from 'react';
import './css/Services.css';
// import growth from '../assets/growth.png';
// import interaction from '../assets/interaction.png';
import mentorship from '../assets/mentorship.png';
import online from '../assets/online-education.png'
import structure from '../assets/hierarchy-structure.png'
import handshake from '../assets/handshake.png'
import rating from '../assets/rating.png'
import opportunity from '../assets/opportunity.png'


const cardData =[
  { color: 'blue', content: 'Structured, industry vetted curriculum' ,favicon:structure},
  { color: 'yellow', content: 'Live classes by faculty who have been there, done that' ,favicon:online },
  { color: 'green', content: 'Practical experience through real-life projects' ,favicon:handshake},
  { color: 'pink', content: 'Regular 1:1 mentorship from industry veterans',favicon:mentorship },
  { color: 'orange', content: 'Aspirational peer group of 2,000+ Scaler students & alumni',favicon:rating},
  { color: 'purple', content: 'Career support via a dedicated recruitment team, alumni network, etc.',favicon:opportunity}
]

const Services = ()=>{
    return(
        <div className="container">
            <div className="Heading">
                <h1>A program for engineers to master PROBLEM SOLVING & SYSTEM DESIGN</h1>
            </div>
            <div className="grid-container">
        {cardData.map((card,index) => (
          <div key={index} className={`card ${card.color}`}>
            <div className="box-content">
            <img src={card.favicon} alt="Favicon" className="favicon" />
            {card.content}
          </div>
          </div>
                ))}
        </div>
      </div> 
             
        

            )
}

export default Services;