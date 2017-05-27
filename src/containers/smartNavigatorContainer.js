import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from '../componets/navigator.js'
import NavButtonActionsCreator from '../redux/action/navButtonAction.js'

const NavigatorContainer = (props) => {
  return (
    <Nav onClick={props.onClick} />
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: page => dispatch(NavButtonActionsCreator.createNavButtonClick(page))
  }
}

export default connect( null, mapDispatchToProps)(NavigatorContainer)
