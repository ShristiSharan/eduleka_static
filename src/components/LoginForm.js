import React from "react";
import "./css/LoginForm.css";

const LoginForm =() => {
    return(
        <div className='cover'>
            <h1>Book a Live Class, for FREE</h1>
            <input type="email" placeholder="Email" />
            <input type="phonenumber" placeholder="Mobile No." />

            <div className="login-btn">Login</div>
            <p className="text">Account have an account?</p>
            <div className="alt-login">
                <div className="Link">Click</div>
            </div>
        </div>
    )
}

export default LoginForm