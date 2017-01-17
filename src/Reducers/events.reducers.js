import { CONTAINER_EVENTS_FETCH_SUCCESS } from '../Actions/container.actions'

export default (state = [], action) => {
  switch (action.type) {
    case CONTAINER_EVENTS_FETCH_SUCCESS:
      return action.data
    default:
      return state
  }
}