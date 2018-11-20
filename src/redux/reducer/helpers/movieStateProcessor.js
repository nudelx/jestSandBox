import {
  MovieFetching,
  MovieFetchDone,
  MovieFetchError
} from '../../action/actionsType'
import actionStatus from './actionStatus'

export const defaultState = {}

export const stateProcessor = {
  [MovieFetching]: (state, action) => {
    return {
      ...state,
      [action.page]: { status: actionStatus.FETCHING, data: null }
    }
  },
  [MovieFetchDone]: (state, action) => {
    console.log('action', action)
    return {
      ...state,
      [action.page]: { status: actionStatus.DONE, data: action.movie }
    }
  },
  [MovieFetchError]: (state, action) => {
    return {
      ...state,
      [action.page]: {
        status: actionStatus.FAIL,
        data: null,
        err: action.error
      }
    }
  }
}
