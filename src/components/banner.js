import React, {useState} from 'react';
import './css/Banner.css'
// import Img from '../assets/illustration-2.png';
import LoginForm from './LoginForm';

const Banner =()=>{
    const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginFormToggle = () => {
    setShowLoginForm(!showLoginForm);
  };
    return(
        <div className="banner">
            <div className="contents">
            <div className="banner-info">
                <h1>Your Path to a Successful
                <br/>_____
                <span style={{ color:'blue'}}>Tech Career!</span>_____
                </h1>
                <h3>Now experience the program for FREE</h3>
                <div className="banner_stats">
                    <div className="banner_stats-details">
                        <div className='banner_stats-numbers'>126%</div>
                        <div className='banner_stats-desc'>Avg. CTC Hike</div>
                    </div> 
                    <div className="banner_stats-details">
                        <div className='banner_stats-numbers'>Top 1%</div>
                        <div className='banner_stats-desc'>Industry Instructors</div>
                    </div>
                    <div className="banner_stats-details">
                        <div className='banner_stats-numbers'>900+</div>
                        <div className='banner_stats-desc'>Placement Partners</div>
                    </div>
                </div>                
                <button className="button-style1" onClick={handleLoginFormToggle}>
                    Book a Live Class
                </button>
                <button className="button-style2">
                    <a href="#login">Explore</a>
                </button>
            </div>
            </div>
            <div className="login">
                <LoginForm/>
            
            {/* <div className='image'>
                <img src={Img} alt="Logo"/>
            </div> */}
            </div>
        
        </div>

        
    );
    }

export default Banner;