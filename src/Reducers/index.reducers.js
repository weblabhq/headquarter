import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import containers from './containers.reducers'
import logs from './logs.reducers'
import events from './events.reducers'
import notifications from './notifications.reducers'
import stats from './stats.reducers'
import user from './user.reducers'
import page from './page.reducers'

export default combineReducers({
  routing: routerReducer,
  containers,
  notifications,
  logs,
  stats,
  user,
  page,
  events,
})