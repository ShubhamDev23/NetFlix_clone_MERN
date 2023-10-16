import React from 'react'
import Navbar from './Navbar'
import "../MycssFiles/profile.css"
import { Auth } from '../firebase'
const Profile = ({user}) => {

  const Plans=[
    {
      id:2,
      title:"Netflix Basic",
      Quality:"480p",
      price:199,
      screens:1
    },
    {
      id:1,
      title:"Netflix Standard",
      Quality:"1080p",
      price:499,
      screens:2

    },
    
    {
      id:3,
      title:"Netflix Premium",
      Quality:"4k+HDR",
      price:649,
      screens:4
    }
  ];

  const makePayment=async()=>{
      
  }
  return (
    <div className='profile'>
   <Navbar/>
   <div className="profile_body">
    <h1>Edit Profile</h1>
    <div className="profile_info">
    <img
      className='profile-avatar'
      src='https://tse3.mm.bing.net/th?id=OIP.XQ-com-ULw7aaf_U3BcQ3AHaHa&pid=Api&P=0&h=180'
      alt='profile-logo'
      />
    <div className='profile_details'>
    <h2 >{user.email}</h2>
    <div className='plans'>
      <h3>Plans</h3>
      {
        Plans.map((plan,index)=>(
          <div key={index} className="plans">
            <div className="plans-info">
            <div className="plan">
            <div>{plan.title}</div>
            <div>{plan.Quality}</div>
            </div>
            <button>Suscribe</button>
            </div>
          </div>
        ))
      }
    </div>
    <button className='signout'
    key={id}
    onClick={()=>{Auth.signOut()}}
    >Sign Out</button>
    </div>
    </div>
  
   </div>
    </div>
  )
}

export default Profile
