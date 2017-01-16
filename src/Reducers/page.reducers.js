import { NAVIGATION_SET_PAGE } from '../Actions/page.actions'

export default (state = {}, action) => {
  switch (action.type) {
    case NAVIGATION_SET_PAGE:
      return {
        selected: action.page
      }
    default:
      return state
  }
}
