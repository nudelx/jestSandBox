import { MovieFetching, MovieFetchDone, MovieFetchError } from '../../action/actionsType'
import actionStatus from  './actionStatus'

export const defaultState = {}

export const stateProcessor = {
  [MovieFetching]: (state, action) => {
    return {...state, [action.page]: { status: actionStatus.FETTCHING, data: null }}
  },
  [MovieFetchDone]: (state, action) => {
    debugger
    return {...state, [action.page]: { status: actionStatus.DONE, data: action.movie }}
  },
  [MovieFetchError]: (state, action) => {
    return {...state, [action.page]: { status: actionStatus.FAIL, data: null, err: action.error }}
  }
}
