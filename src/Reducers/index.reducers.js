import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import containers from './containers.reducers'
import logs from './logs.reducers'
import errors from './errors.reducers'
import stats from './stats.reducers'
import user from './user.reducers'

export default combineReducers({
  routing: routerReducer,
  containers,
  errors,
  logs,
  stats,
  user,
})