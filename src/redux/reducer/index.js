import { combineReducers } from 'redux'
import content from  './content'
import navButtons from './navButtons'

export default combineReducers({
  content,
  navButtons
})
