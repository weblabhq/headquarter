import localStorage from '../lib/local-storage'

const storeSessionData = (data) => {
  localStorage.set('access_token', data.token)
  localStorage.set('username', data.username)
}

const clearSessionData = () => {
  localStorage.del('access_token')
  localStorage.del('username')
}

export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      storeSessionData(action.data)
      return {
        ...state,
        username: action.data.username,
        accessToken: action.data.token
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        username: undefined,
        accessToken: undefined
      }
    case 'LOGOUT':
      clearSessionData()
      return state
    default:
      return state
  }
}