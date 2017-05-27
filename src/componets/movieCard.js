import React from 'react'
import Logo from './logo'
const MovieCard = ({movie, page}) => {
  console.log('movieData',movie)
  return (
    <div>
      <Logo />
      <div className='movie-title'>{movie.data.title}</div>
      <div className='movie-data'>
        {movie.data.opening_crawl}
      </div>
      <div className='movie-data-bottom'>
        <div>Director: {movie.data.director} </div>
      </div>
    </div>
  )
}

export default MovieCard
