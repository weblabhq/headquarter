import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import errors from './errors.reducers'
import user from './user.reducers'

export default combineReducers({
  routing: routerReducer,
  user,
  errors
})