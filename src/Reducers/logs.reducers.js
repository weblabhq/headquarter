import {
  FETCH_CONTAINER_LOGS_SUCCESS
} from '../Actions/logs.actions'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CONTAINER_LOGS_SUCCESS:
      return {
        ...state,
        [action.containerId]: action.data
      }
    default:
      return state
  }
}