import React from 'react'
import "../MycssFiles/card.css"
const Card = () => {
  return (
    <div className='card'>
      <div>card</div> 
      <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
                isLargeRow? movie.poster_path:movie.backdrop_path}`}
            alt={movie.name}
            
            />
    </div>
  )
}

export default Card

