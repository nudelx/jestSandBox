import { defaultState, stateProcessor } from './helpers/movieStateProcessor'

export default function movies(state, action) {
  if (stateProcessor.hasOwnProperty(action.type)) {
    return stateProcessor[action.type](state, action)
  }
  return { ...defaultState, ...state }
}
