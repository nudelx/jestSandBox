import React, { Component } from 'react';
import './style/App.css';
import Header from './componets/header'
import ContentContainer from './containers/contentContainer'
import NavigatorContainer from './containers/navigatorContainer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import reducer from './redux/reducer/index'

const middleware  = [thunk]
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

let store = createStore(
  reducer,
  enhancer
)

export default class App extends  Component {
  render () {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <NavigatorContainer />
          <ContentContainer />
        </div>
      </Provider>
    )
  }
}
