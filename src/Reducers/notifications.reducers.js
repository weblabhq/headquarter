import * as N from '../Actions/notifications.actions'

export default (state = {}, action) => {
  if (action.type === N.NOTIFICATION_CLOSE) {
    return state.filter(notification => notification.id !== action.id)
  }

  if (/_ERROR$/.test(action.type)) {
    return [...state, {
      id: Math.random().toString(),
      message: action.error,
      level: 'error',
    }]
  }

  if (N.NOTIFICATION === action.type) {
    return [...state, {
      id: Math.random().toString(),
      message: action.message,
      level: action.level,
    }]
  }

  return state
}