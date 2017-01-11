import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import auth from './lib/auth'
import logger from './lib/logger'
import reducers from './Reducers/index.reducers'

// Initial store state
const INITIAL_STATE = {
  user: {
    username: auth.getUsername(),
    accessToken: auth.getAccessToken(),
  },
  errors: [],
  containers: {},
  logs: {},
  stats: {}
}

// Create the store
const store = createStore(
  reducers,

  INITIAL_STATE,

  applyMiddleware(
    thunk,
    routerMiddleware(browserHistory),
    logger('[Weblab]')
  )
)

export default store
