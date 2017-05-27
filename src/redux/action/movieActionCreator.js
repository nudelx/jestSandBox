import { MovieFetching, MovieFetchDone, MovieFetchError } from './actionsType'

const MovieActionsCreator = {
  startGettingMovie: page => ({ type: MovieFetching, page }),
  getMovieDone: (movie, page) => ({ type: MovieFetchDone, movie, page }),
  getMovieError: error => ({ type: MovieFetchError, error })
}

export default MovieActionsCreator
