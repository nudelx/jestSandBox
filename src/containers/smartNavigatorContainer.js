import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from '../componets/navigator.js'
import NavButtonActionsCreator from '../redux/action/navButtonAction.js'
import MovieActionsCreator from '../redux/action/movieActionCreator.js'
import MovieAPI from '../helper/getMovie'


const NavigatorContainer = (props) => {
  return (
    <Nav onClick={props.onClick} />
  )
}

const mapDispatchToProps = (dispatch) => {

  const tryGetMovie = (movieNum) => movieNum && MovieAPI.fetch(`http://swapi.co/api/films/${movieNum}`)

  const fetchingMoviewProcess = (page) => {
    const movieNum = page.split('_')[1]

    dispatch(MovieActionsCreator.startGettingMovie(movieNum))

    tryGetMovie(movieNum)
    .then((data) => dispatch(MovieActionsCreator.getMovieDone(data, movieNum)))
    .catch(error => dispatch(MovieActionsCreator.getMovieError(error, movieNum)))
  }

  return {
    onClick: page => {
      fetchingMoviewProcess(page)
      dispatch(NavButtonActionsCreator.createNavButtonClick(page))
    }
  }
}

export default connect( null, mapDispatchToProps)(NavigatorContainer)
