import { createReducer } from 'redux-starter-kit'
import { hideBurger, showBurger } from '../actions'

const initialState = {
  visible: false,
  layers: {}
}


export const burger = createReducer(initialState, {
  [showBurger]: state => {
    state.visible = true
  },
  [hideBurger]: state => {
    state.visible = false
  }
})
