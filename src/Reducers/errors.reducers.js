export default (state = {}, action) => {
  if (action.type === 'CLOSE_ERROR') {
    return state.filter(err => err.id !== action.id)
  }

  if (/_ERROR$/.test(action.type)) {
    return [...state, {
      id: Math.random().toString(),
      message: action.error
    }]
  }

  return state
}