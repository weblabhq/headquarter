import {
  CONTAINER_STATS_FETCH_SUCCESS
} from '../Actions/container.actions'

export default (state = {}, action) => {
  switch (action.type) {
    case CONTAINER_STATS_FETCH_SUCCESS:
      return {
        ...state,
        [action.data.Id]: action.data
      }
    default:
      return state
  }
}