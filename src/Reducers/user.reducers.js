export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
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
      return {
        ...state,
        username: undefined,
        accessToken: undefined
      }
    default:
      return state
  }
}