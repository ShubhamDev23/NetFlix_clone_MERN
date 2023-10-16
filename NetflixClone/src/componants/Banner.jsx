import React, { useState,useEffect } from 'react'
import "../MycssFiles/banner.css"
import axios from "../Data"
import request from '../Requests'
import {Link} from "react-router-dom"
const Banner = () => {

  const[movies, setmovies]=useState([]);
  const MakeItShort =(string ,n)=>{
    return string?.length>150?string.substr(0,n-1)+'....':string;
  }

  useEffect(() => {
    const makeMovieRequest =async()=>{
    const  MovieRequest=await axios.get(request.fetchHorrorMovies);
      setmovies(
        MovieRequest.data.results[
          Math.floor(Math.random() *MovieRequest.data.results.length-1 )
        ]
      );
    }
    makeMovieRequest();
  }, [])
  

  return (
    <header className='banner'
    style={{
      backgroundSize:"cover",
      backgroundImage:`url("http://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
      backgroundPosition:"center center"
    }}
    >
      <div className="containts">
        <h1 className="title">
          { movies?.name || movies?.title ||movies?.original_name}
        </h1>
        <div className="rating"><h3 style={{margin:"10px"}}>Rating :{movies?.vote_average}/10 </h3>
        <h4> .{ movies?.vote_count} votes</h4></div>
        <div className="buttons">
          <Link to="player"><button className="banner_buttons" >Play</button></Link>
          <Link to="/mylist" className="banner_buttons" >My List</Link>
        </div>
        <div className="decription">
         {MakeItShort(movies?.overview,200)}
          
        </div>
      </div>
    </header>
  )
}

export default Banner
