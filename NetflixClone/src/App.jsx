import { useEffect, useState } from 'react'
import Home from './pages/Home'
import "./App.css"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Login from './pages/Login'
import { Auth } from './firebase'
import Profile from './componants/Profile'
import {useDispatch, useSelector} from "react-redux";
import {login,logout,selectUser} from "./redux/UserSlice"
import Player from './componants/Player'
import UserList from './componants/UserList'
import Footer from './componants/Footer'
function App() {
const user=useSelector(selectUser);
const dispatch=useDispatch();

useEffect(()=>{
  const unsuscribe=Auth.onAuthStateChanged((userAuth)=>{
    if(userAuth){
      dispatch(
        login(  {
          uid:userAuth.id,
          email:userAuth.email
        })
      )
    }else {
      dispatch(logout());
    }
  })
  return unsuscribe
},[dispatch])

  return (
    <div className='app'>
      
      <Router>
        {!user?(
          <Login/>
        //  <Route exact path='/login' element={Login} />
        ):(
        <Routes>
          <Route path='/profile' element={<Profile user={user}/>}/>
          <Route exact path='/' element={<Home/>} />
          <Route path='player' element={<Player/>}/>
          <Route path='/mylist' element={<UserList/>} />
        </Routes>)}
      </Router>
      
    </div>
  )
}

export default App
