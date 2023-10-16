import React from "react";
import { useState, useEffect } from "react";
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

const Row = ({ title, fetchedURL, isLargeRow,isLiked=false }) => {
  const navigate = useNavigate();
  const [movies, setmovies] = useState([]);
  const [Ishovered, setIsHovered] = useState(false);
  const [email,setEmail]=useState();
  const base_url = "http://image.tmdb.org/t/p/w500/";

  onAuthStateChanged(Auth, (currentUser) => {
    if (currentUser) {
      setEmail(currentUser.email);
    } else navigate("/login");
  });

  useEffect(() => {
    const GetMovies = async () => {
      const movieRequest = await axios.get(fetchedURL);
      setmovies(movieRequest.data.results.slice(0, 10));
      return movieRequest;
    };
    GetMovies();
  }, [fetchedURL]);

  const addToList = async (movie) => {
    try {
      await axios.post("http://localhost:5000/api/user/add", {
        email,
        data: movie,
      });
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div
      className="row"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <h2 >{title}</h2>
      <div className="row_posters" >
        {movies.map((movie) => (
          <>
            <img
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onClick={() => navigate("/player")}
            />
            {Ishovered && (
              <div className="hover">
                <div className="img-vid">
                  <img
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                    onClick={() => navigate("/player")}
                  />
                  <video
                    src={video}
                    loop
                    muted
                    onClick={() => navigate("/player")}
                  />
                </div>
                <div className="info-container  flex column">
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
                  <BsCheck
                    title="Remove from List"
                    onClick={() =>
                      dispatch(
                        removeMovieFromLiked({ movieId: movie.id, email })
                      )
                    }
                  />
                ) : (
                  <AiOutlinePlus title="Add to my list" onClick={addToList} />
                )}
                    </div>
                    <div className="info">
                    <BiChevronDown title="More Info" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Row;
