import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/navigator'
import NavButtonActionsCreator from '../redux/action/navButtonAction'
import { fetchingMovieProcess } from '../redux/action/movieActionCreator'

const NavigatorContainer = props => {
  const onCLick = page => {
    props.createNavButtonClick(page)
    props.fetchingMovieProcess(page)
  }
  return <Nav onClick={onCLick} />
}

export default connect(
  null,
  {
    fetchingMovieProcess,
    createNavButtonClick: NavButtonActionsCreator.createNavButtonClick
  }
)(NavigatorContainer)
