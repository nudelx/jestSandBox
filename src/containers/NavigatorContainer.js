import React from 'react'
import { connect } from 'react-redux'
import Nav from '../componets/navigator'
import NavButtonActionsCreator from '../redux/action/navButtonAction'
import { fetchingMoviewProcess } from '../redux/action/movieActionCreator'

const NavigatorContainer = (props) => {
  const onCLick = (page) => {
    props.createNavButtonClick(page)
    props.fetchingMoviewProcess(page)
  }
  return ( <Nav onClick={onCLick} /> )
}

const mapDispatchToProps = {
  fetchingMoviewProcess,
  createNavButtonClick: NavButtonActionsCreator.createNavButtonClick,
}

export default connect( null, mapDispatchToProps)(NavigatorContainer)
