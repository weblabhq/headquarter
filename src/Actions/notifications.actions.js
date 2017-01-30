export const NOTIFICATION = 'NOTIFICATION'
export const success = (message) => {
  return {
    type: NOTIFICATION,
    message,
    level: 'success'
  }
}

export const info = (message) => {
  return {
    type: NOTIFICATION,
    message,
    level: 'info'
  }
}

export const warning = (message) => {
  return {
    type: NOTIFICATION,
    message,
    level: 'warning'
  }
}

export const error = (message) => {
  return {
    type: NOTIFICATION,
    message,
    level: 'error'
  }
}

export const NOTIFICATION_CLOSE = 'NOTIFICATION_CLOSE'
export const close = (id) => {
  return {
    type: NOTIFICATION_CLOSE,
    id
  }
}