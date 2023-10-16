import React from 'react'
import video from "../Videos/OnePiece.mp4"
import {BsArrowLeft} from "react-icons/bs"
import "../MycssFiles/player.css"
import { useNavigate } from 'react-router-dom'

const Player = () => {
    const navigate=useNavigate();
  return (
    <div className='player'>
        <div className="back">
        <BsArrowLeft onClick={()=>navigate(-1)}/>
        </div>
    <video src={video} autoPlay loop controls muted/>
    </div>
  )
}

export default Player
