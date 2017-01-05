const logger = (message) => (store) => (next) => (action) => {
  if (process.env.NODE_ENV !== 'development') return

  console.log(`${message} Dispatching`, action)
  let result = next(action)
  console.log(`${message} Next state`, store.getState())

  return result
}

export default logger
