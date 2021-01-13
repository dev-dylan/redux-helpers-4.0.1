import createLogger from 'redux-logger'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers'
 
import Route from "../config/route"
 
const navReducer = createNavigationReducer(Route)
 
const reducers = combineReducers({nav: navReducer})
 
const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
  'root',
)
 
const configureStore = preloadedState => {
  return createStore(
    reducers,
    preloadedState,
    compose(
      applyMiddleware(middleware, createLogger)
    )
  )
}
 
export const store2 = configureStore()