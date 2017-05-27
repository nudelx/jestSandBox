import { navButtonClick } from '../action/actionsType'
const defaultState = {}
const increment = ( state ,nav ) => {
  if (state.hasOwnProperty(nav)) {
    const val = parseInt(state[nav],0)
    return { ...state, [nav]: val+1 }
  }
  return { ...state, [nav]: 1 }
}

export default function navButtons(state = {}, action) {
  debugger
    if (action.type === navButtonClick) {
      return increment(state, action.page)
    }

    return { ...defaultState, ...state }

}
