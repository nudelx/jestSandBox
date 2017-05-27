import React, { Component } from 'react';
import './style/App.css';
import Header from './componets/header'
import PageContent from './componets/pageContent'

const App = () => {
  return (
    <div className="App">
      <Header />
      <PageContent />
    </div>
  );
}

export default App;
