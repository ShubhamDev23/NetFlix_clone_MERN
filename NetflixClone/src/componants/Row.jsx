import React, { useState, useEffect } from "react";
import "../MycssFiles/row.css";
import axios from "../Data";
import video from "../Videos/OnePiece.mp4";
import { useNavigate } from "react-router-dom";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { Auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import UserList from "./UserList";

const Row = ({ title, fetchedURL, isLargeRow, isLiked = false }) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [email, setEmail] = useState();
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const base_url = "http://image.tmdb.org/t/p/w500/";

  onAuthStateChanged(Auth, (currentUser) => {
    if (currentUser) {
      setEmail(currentUser.email);
    } else {
      navigate("/login");
    }
  });

  useEffect(() => {
    const getMovies = async () => {
      const movieRequest = await axios.get(fetchedURL);
      setMovies(movieRequest.data.results.slice(0, 10));
      return movieRequest;
    };
    getMovies();
  }, [fetchedURL]);

  const handleMovieHover = (movie) => {
    setHoveredMovie(movie);
  };

  const handleMovieLeave = () => {
    setHoveredMovie(null);
  };
  const AddMovieToLiked=async(movie)=>{
    try {
      axios.get("http://localhost:5000/MyNetflix/user/add",{
        email,
        data:movie})       
    } catch (error) {
      console.log(error)
    }
  }
  const removeMovieFromLiked=async(id)=>{
    try {
      axios.put("http://localhost:5000/api/user/remove", {
      email,
      id,
    });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
     
      <div className="row_posters">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-container"
            onMouseEnter={() => handleMovieHover(movie)}
            onMouseLeave={handleMovieLeave}
          >
            <img
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onClick={() => navigate("/player")}
            />
            {hoveredMovie === movie && (
              <div className="hover">
                <div className="video-container">
                  <video src={video} loop muted autoPlay />
                </div>
                <div className="hover-name">{movie.title}</div>
                <div className="info-container flex">
                  <h3 className="name" onClick={() => navigate("/player")}>
                    {movie.name}
                  </h3>
                  <div className="icons flex j-between">
                    
                    <div className="controls flex">
                      <IoPlayCircleSharp
                        title="Play"
                        onClick={() => navigate("/player")}
                      />
                      <RiThumbUpFill title="Like" />
                      <RiThumbDownFill title="Dislike" />
                      {isLiked ? (
                        <BsCheck title="Remove from List" onClick={()=>{removeMovieFromLiked (movie.id)}}/>
                      ) : (
                        <AiOutlinePlus title="Add to my list" onClick={()=>{AddMovieToLiked(movie)}} />
                      )}
                    </div>
                    <div className="info">
                      <BiChevronDown title="More Info" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
