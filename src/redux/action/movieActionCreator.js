import { MovieFetching, MovieFetchDone, MovieFetchError } from "./actionsType"
import MovieAPI from "../../helper/MovieAPI"

export const MovieActionsCreator = {
  startGettingMovie: page => ({ type: MovieFetching, page }),
  getMovieDone: (movie, page) => ({ type: MovieFetchDone, movie, page }),
  getMovieError: error => ({ type: MovieFetchError, error })
}

export const tryGetMovie = movieNum =>
  movieNum && MovieAPI.fetch(`https://swapi.co/api/films/${movieNum}`)

export const fetchingMovieProcess = page => (dispatch, getState) => {
  if (getState().movies[page] && getState().movies[page].status === "DONE") {
    return Promise.resolve(getState().movies[page].data)
  }

  const [_page, movieNum] = page.split("_") // eslint-disable-line
  dispatch(MovieActionsCreator.startGettingMovie(page))
  return tryGetMovie(movieNum)
    .then(data => dispatch(MovieActionsCreator.getMovieDone(data, page)))
    .catch(error => dispatch(MovieActionsCreator.getMovieError(error, page)))
}
