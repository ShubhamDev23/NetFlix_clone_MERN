import React, { useState } from 'react'
import "../MycssFiles/login.css"
import netflix_logo from "../images/netflix_logo.png"
import Signup from '../componants/Signup';

const Login = () => {

  const[SignIn,setSignIn]=useState(false);

  return (
    <div className='login'>
      
      <div className="login-bg">
        <img src={netflix_logo} 
        alt="logo"
        className="login-logo" />

        <button 
        className="signin_btn"
        onClick={()=>setSignIn(true)}
        >Sign in</button>

        <div className='gredient'/>
      </div>

     <div className="login_body">
      {SignIn?(
        <Signup/>
      ):(
      <>
       <h1>Unlimited flims, TV programs and </h1>
      <h1> more,</h1>
      <h3>Watch anywhere.  Cancel at any time</h3>
      <h4>
        Ready to watch? Enter your email to 
        create or restart your membership.
      </h4>

      <div className="login_form">
       <form>
       <input 
        type='email'
        placeholder='Email Adress'/>
        <button 
        className='started'
        onClick={()=>setSignIn(true)}
        >
        GET STARTED</button>
       </form>
       </div>
      </>)}
     </div>
    </div>
  )
}

export default Login
