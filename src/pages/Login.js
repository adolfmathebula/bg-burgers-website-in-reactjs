import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Login.Styles.css';

const Login = () => {
  return (
   
    <section className="login-section">

        <h1>Login</h1>
        <form className="form">
            <label className="form-label">Username</label>
            <input type="text" name="username" value="" placeholder="username or email..." className="form-input" />
            <label clasclassNames="form-label">Password</label>
            <input type="text" name="passsword" value="" placeholder="password..." className="form-input" />
            <div className="form-radio">
                <input type="radio" className="radio-btn"  name="remember"value="remember" /> <span for="radio-btn" classNames="form-radio-text">Remember Me</span>
            </div>
            <input type="button" value="Login" className="form-submit-btn" />
        </form>
        
        <div classNames="form-links">
            <Link to='/nopage'>Sign Up</Link>
            <Link to='/nopage'>Forgot Password?</Link>
        </div>

        <div className="spacing"></div>
        
    </section>

  )
}

export default Login