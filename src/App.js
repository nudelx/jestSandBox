import React, { Component } from 'react';
import './style/App.css';
import Header from './componets/header'
import PageContent from './componets/pageContent'
import Nav from './componets/navigator.js'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <PageContent />
    </div>
  );
}

export default App;
