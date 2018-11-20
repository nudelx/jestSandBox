import React from 'react'
import Logo from './logo'
const MovieCard = ({ movie, page }) => {
  return (
    <div>
      <Logo />
      <div className="movie-title">{movie.data.title}</div>
      <div className="movie-data">
        <div className="animation">{movie.data.opening_crawl}</div>
      </div>
      <div className="movie-data-bottom">
        <div>Director: {movie.data.director} </div>
        <div>{movie.data.release_date} </div>
      </div>
    </div>
  )
}

export default MovieCard
