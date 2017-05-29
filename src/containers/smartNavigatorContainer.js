import React from 'react'
import { connect } from 'react-redux'
import Nav from '../componets/navigator.js'
import NavButtonActionsCreator from '../redux/action/navButtonAction.js'
import { fetchingMoviewProcess } from '../redux/action/movieActionCreator.js'

const NavigatorContainer = (props) => {
  const onCLick = (page) => {
    props.fetchingMoviewProcess(page)
    props.createNavButtonClick(page)
  }
  return ( <Nav onClick={onCLick} /> )
}

const mapDispatchToProps = {
  fetchingMoviewProcess,
  createNavButtonClick: NavButtonActionsCreator.createNavButtonClick,
}

export default connect( null, mapDispatchToProps)(NavigatorContainer)
