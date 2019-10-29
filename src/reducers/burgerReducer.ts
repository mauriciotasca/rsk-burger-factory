import { Action } from 'redux'

const initialState = {
  layers: {}
}

export function burger(state = initialState, action: Action) {
  switch (action.type) {
    case 'SHOW_BURGER': {
      return { ...state }
    }
    default:
      return state
  }
}
