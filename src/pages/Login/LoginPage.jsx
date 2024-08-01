import React, { useState } from 'react';
import './LoginPage.css';
import logo from '../../assets/logo.png';

const LoginPage = () => {
  const [signInState, setSignInState] = useState('Sign In');

  const toggleSignInState = () => {
    setSignInState(prevState => (prevState === 'Sign In' ? 'Sign Up' : 'Sign In'));
  }

  return (
    <div className='login-page'>
      <img src={logo} alt='' className='login-logo'/>
      <div className="login-form">
        <h1>{signInState}</h1>
        <form>
          {signInState === 'Sign Up' && <input type="text" placeholder='Name' />}
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button>{signInState}</button>
          <div className="form-help">
            <div className="remember-me">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signInState === 'Sign In' ? 
            <p>New to Netflix? <span onClick={toggleSignInState}>Sign Up Now</span></p> 
            : <p>Already have an account? <span onClick={toggleSignInState}>Sign In</span></p>
          }
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
