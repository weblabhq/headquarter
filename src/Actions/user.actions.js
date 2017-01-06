import { push } from 'react-router-redux'
import RestAPI from '../lib/api/rest'
import localStorage from '../lib/local-storage'

const storeSessionData = (data) => {
  localStorage.set('access_token', data.token)
  localStorage.set('username', data.username)
}

const clearSessionData = () => {
  localStorage.del('access_token')
  localStorage.del('username')
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const success = (data) => {
  return {
    type: LOGIN_SUCCESS,
    data
  }
}

export const LOGIN_ERROR = 'LOGIN_ERROR'
export const error = (error = {}) => {
  return {
    type: LOGIN_ERROR,
    error: error.message || 'Something went wrong.'
  }
}

export const LOGOUT = 'LOGOUT'
export const logout = () => (dispatch) => {
  clearSessionData()

  return dispatch({
    type: LOGOUT
  })
}

export const login = (email, password) => (dispatch) => {
  return RestAPI
    .users
    .login({ email, password })
    .then(data => {
      storeSessionData(data)
      dispatch(success(data))
      return dispatch(push('/'))
    })
    .catch(err => {
      switch (err.status) {
        // User not confirmed by email yet
        case 403:
          return dispatch(push('/confirm'))
        default:
          return dispatch(error(err)) 
      }
    })
}

export const CLOSE_ERROR = 'CLOSE_ERROR'
export const close = (id) => {
  return {
    type: CLOSE_ERROR,
    id
  }
}

export const REGISTER_ERROR = 'REGISTER_ERROR'
export const registerError = (error = {}) => {
  return {
    type: REGISTER_ERROR,
    error: error.message || 'Something went wrong.'
  }
}

export const register = (email, username, password) => (dispatch) => {
  return RestAPI
    .users
    .register({ email, username, password })
    .then(data => {
      localStorage.set('username', data.username)
      dispatch(push('/confirm'))
    })
    .catch(err => dispatch(registerError(err)))
}
