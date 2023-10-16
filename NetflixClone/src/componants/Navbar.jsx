import React from 'react'
import "../MycssFiles/navbar.css"
import {Link} from "react-router-dom"
import logo_netflix from "../images/netflix_logo.png"
const Navbar = () => {
  return (
    <div className='nav-container'>
        <Link to="/"><img
        className='netflix-logo'
        alt='logo'
        src={logo_netflix}
        /></Link>
        <h3></h3>
        <Link to="/profile"><img

      className='profile-logo'
      src='https://tse3.mm.bing.net/th?id=OIP.XQ-com-ULw7aaf_U3BcQ3AHaHa&pid=Api&P=0&h=180'
      alt='profile-logo'
      /> </Link>
      
    </div>
  )
}

export default Navbar
