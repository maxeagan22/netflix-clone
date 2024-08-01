import React from 'react'
import './LoginPage.css'
import logo from '../../assets/logo.png'

const LoginPage = () => {
  return (
    <div className='login-page'>
      <img src={logo} alt='' className='login-logo'/>
      <div className="login-form">
        <h1>Sign Up</h1>
        <form >
          <input type="text"placeholder='Name' />
          <input type="email"placeholder='Email' />
          <input type="password"placeholder='Password' />
          <button>Sign Up</button>
          <div className="form-help">
            <div className="remember-me">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage