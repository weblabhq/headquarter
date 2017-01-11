import {
  CONTAINERS_FETCH_SUCCESS
} from '../Actions/container.actions'

const byId = (containers) => {
  const result = {}

  containers.forEach(c => { result[c.Id] = c })

  return result
}

export default (state = {}, action) => {
  switch (action.type) {
    case CONTAINERS_FETCH_SUCCESS:
      return byId(action.data)
    default:
      return state
  }
}