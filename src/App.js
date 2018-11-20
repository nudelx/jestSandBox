import React, { Component } from "react"
import "./style/App.css"
import Header from "./components/header"
import ContentContainer from "./containers/contentContainer"
import NavigatorContainer from "./containers/NavigatorContainer"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import reducer from "./redux/reducer/index"
// import storeMock from './redux/reducer/helpers/mockStore'

// const saveStore = store =>
//   localStorage
//     ? localStorage.setItem('JEST_DEMO_LOCAL', JSON.stringify(store))
//     : null

const middleware = [thunk]
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(...middleware))

const store = createStore(reducer, {}, enhancer)
// store.subscribe(() => {
//   saveStore(store.getState())
// })

export default class App extends Component {
  render() {
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
