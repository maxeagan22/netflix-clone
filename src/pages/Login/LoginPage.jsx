import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './LoginPage.css';
import { login, signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif'

const LoginPage = () => {
  const [signInState, setSignInState] = useState('Sign In');
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[loading, setLoading] = useState(false);

  const userAuth = async (event) =>{
    event.preventDefault();

    setLoading(true);

    if (signInState === "Sign In"){
      await login(email, password);
    }
    else{
      await signup(name, email, password);
    }
    setLoading(false);
  }

  const toggleSignInState = () => {
    setSignInState(prevState => (prevState === 'Sign In' ? 'Sign Up' : 'Sign In'));
  }

  return (
    loading? <div className="login-spinner">
      <img src={netflix_spinner} alt="Netflix Spinner"/>
    </div>:
    <div className='login-page'>
      <img src={logo} alt='' className='login-logo'/>
      <div className="login-form">
        <h1>{signInState}</h1>
        <form>
          {signInState === 'Sign Up'? 
          <input value={name} onChange={(e) => {setName(e.target.value)}} type="text" placeholder='Name' /> : <></>}
          <input value={email} onChange={(e) => {setEmail(e.target.value)}}
          type="email"  placeholder='Email' />
          <input value={password} onChange={(e) => {setPassword(e.target.value)}}
          type="password" placeholder='Password' />
          <button onClick={userAuth} type='submit'>{signInState}</button>
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
