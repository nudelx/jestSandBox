import { combineReducers } from 'redux'
import content from  './content'
import navButtons from './navButtons'
import movies from './movies'

export default combineReducers({
  content,
  movies,
  navButtons,
})
