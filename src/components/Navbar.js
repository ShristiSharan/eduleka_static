import React from 'react';
import './css/Navbar.css';
// import { Link } from 'react-router-dom'; // If using React Router for navigation



const Navbar = ()=>{
    const handleLogin = () => {
        // Handle login logic here
      };
        return(
            <div className="navbar">
                <a href='/' className="logo">EDULAKE.</a>
                <ul>
                    <li className='active'><a href='home'>Home</a></li>
                    <li><a href='curriculam'>Curriculam</a></li>
                    <li><a href='mentorship'>Mentorship</a></li>
                    <li><a href='community'>Community</a></li>
                    <li><a href='career'>Careers</a></li>
                    <li><a href='faq'>FAQ</a></li>
                    <li>
                       <button className="login-button" onClick={handleLogin}>Login</button>
           {/* Use Link component from React Router */}
                    </li>
                  

                </ul>
            </div>

        );
    }

export default Navbar;