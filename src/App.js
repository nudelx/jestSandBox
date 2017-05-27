import React, { Component } from 'react';
import './style/App.css';
import Header from './componets/header'
import ContentConteiner from './containers/contentConteiner'
import NavigatorContainer from './containers/smartNavigatorContainer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './redux/reducer/index'

let store = createStore(reducer)


export default class App extends  Component {
  render () {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <NavigatorContainer />
          <ContentConteiner />
        </div>
      </Provider>
    )
  }
}
