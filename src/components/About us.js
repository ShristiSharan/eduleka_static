import React from'react';
import './css/About us.css'
import LoginForm from './LoginForm';


const About=()=> {
    return(
        <div className="Content">
            <div className="login-form">
                <LoginForm/>
            </div>
            <div className="about-section">
                <h2>About Us</h2>
                <p>Edulake is an online transformative upskilling platform for working tech professionals. Our industry-vetted approach towards teaching & training young professionals not only helps them upskill but also #CreateImpact in the real world. We are devoted to creating an ecosystem that nurtures our learners and assists them in unlocking talent, skills & opportunities at every stage of their careers. Learners enrolled with us are taught, guided, and mentored by industry veterans and experts from leading tech organisations, including Google, Meta, Netflix, Microsoft, Amazon, Hotstar, Twitter etc.</p>
            </div>
        </div>
    )
}

export default About;

