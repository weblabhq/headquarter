export const PAGES = {
  DASHBOARD: 'DASHBOARD',
  EVENTS: 'EVENTS',
  LOGS: 'LOGS',
  SERVICES: 'SERVICES'
}

export const NAVIGATION_SET_PAGE = 'NAVIGATION_SET_PAGE'
export const setPage = (page) => {
  return {
    type: NAVIGATION_SET_PAGE,
    page
  }
}