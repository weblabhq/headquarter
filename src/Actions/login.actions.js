import RestAPI from '../lib/api/rest'

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
export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const login = (email, password) => (dispatch) => {
  return RestAPI
    .users
    .login({ email, password })
    .then(data => dispatch(success(data)))
    .catch(err => dispatch(error(err)))
}

export const CLOSE_ERROR = 'CLOSE_ERROR'
export const close = (id) => {
  return {
    type: CLOSE_ERROR,
    id
  }
}
