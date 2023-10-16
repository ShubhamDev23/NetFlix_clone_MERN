import React, { useState } from 'react'
import "../MycssFiles/signup.css"
import { Auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const Signup = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const RegisterUser= async(e)=>{
    
    try {
      await createUserWithEmailAndPassword(Auth,email,password)
      console.log(email,password)
    } catch (err) {
      console.log(err)
    }
  }
  const SigninUser= async(e)=>{
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(Auth,email,password)
      alert("user Signed in")
      console.log(email,password)
    } catch (err) {
      alert(err.message)
      console.log(err);
    }
  }

  const CreateMyList=()=>{
    console.log("hi")
  }
  const runFunctions=()=>{
    CreateMyList();
    RegisterUser();
  }

  return (
    <div className='signup'>
        <form>
        <h1>Sign up</h1>
        <input 
        type='email' 
        placeholder='Email ' 
        value={email} onChange={(e)=>setEmail(e.target.value)}
        />
        <input 
        type='password' 
        placeholder='password'
        value={password} onChange={(e)=>setPassword(e.target.value)}
        />
        <button type='submit' onClick={SigninUser}>Sign In</button>
        <h4>
          <span className="gray_text">New to netflix? </span>
          <span className="signin_link" onClick={runFunctions}>Sign up now.</span></h4>
        </form>

    </div>
  )
}

export default Signup
