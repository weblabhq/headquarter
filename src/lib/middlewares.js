import auth from './auth'

// Auth midleware
function requireAuth (nextState, replace) {
  if (!auth.isLoggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

// Redirect logged in users middleware
function redirectHomeIfLoggedIn (nextState, replace) {
  if (auth.isLoggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default {
  requireAuth,
  redirectHomeIfLoggedIn
}