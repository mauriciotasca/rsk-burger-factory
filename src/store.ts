import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers'

export default function configureStore(preloadedState: any): Store {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  return createStore(rootReducer, preloadedState, composedEnhancers)
}
