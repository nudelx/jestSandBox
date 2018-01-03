import React from 'react'
import logo from '../logo.svg';
import '../style/App.css';
import WithTrailerPreview from '../HOC/WithTrailerPreview'

const Test = () => <div></div>


const AA = WithTrailerPreview(Test)

const Header = ({ txt }) => {
  txt = txt || 'Welcome to React'
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{txt}</h2>
      <AA/>
    </div>
  )
}

export default Header
