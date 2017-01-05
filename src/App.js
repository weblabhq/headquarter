import React from 'react'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory, Router, Route } from 'react-router'

// Styles
import './App.css'

import store from './store'
import auth from './lib/auth'
import middlewares from './lib/middlewares'

// Pages
import Dashboard from './Pages/Dashboard'
import NotFound from './Pages/NotFound'
import Login from './Pages/Login'
import Logout from './Pages/Logout'

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

// App routes
const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/login' component={Login} onEnter={middlewares.redirectHomeIfLoggedIn} />
      <Route path='/logout' component={Logout} onEnter={middlewares.requireAuth} />
      <Route path='/' component={Dashboard} onEnter={middlewares.requireAuth} />
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>
)

export default App;
