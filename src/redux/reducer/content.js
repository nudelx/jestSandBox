import { navButtonClick } from '../action/actionsType'
const defaultState = {
  currentPage: null
}

export default function content(state , action) {
  if ( action.type === navButtonClick ) {
    return { ...state, currentPage: action.page}
  }
  return { ...defaultState, ...state}
}
