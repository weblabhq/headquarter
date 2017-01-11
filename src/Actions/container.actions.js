import RestAPI from '../lib/api/rest'

export const CONTAINERS_FETCH_START = 'CONTAINERS_FETCH_START'
export const containersFetchStart = () => {
  return {
    type: CONTAINERS_FETCH_START
  }
}

export const CONTAINERS_FETCH_SUCCESS = 'CONTAINERS_FETCH_SUCCESS'
export const containersFetchSuccess = (data) => ({
  type: CONTAINERS_FETCH_SUCCESS,
  data
})

export const CONTAINERS_FETCH_ERROR = 'CONTAINERS_FETCH_ERROR'
export const containersFetchError = (error) => {
  return {
    type: CONTAINERS_FETCH_ERROR,
    error: error.message || 'Something went wrong.',
    raw: error
  }
}

export const containersFetch = (username) => (dispatch) => {
  dispatch(containersFetchStart())

  return RestAPI
    .microservices
    .list(username)
    .then(containers => dispatch(containersFetchSuccess(containers)))
    .catch(err => dispatch(containersFetchError(err)))
}

export const CONTAINER_STATS_FETCH_START = 'CONTAINER_STATS_FETCH_START'
export const containerStatsFetchStart = () => {
  return {
    type: CONTAINER_STATS_FETCH_START
  }
}

export const CONTAINER_STATS_FETCH_SUCCESS = 'CONTAINER_STATS_FETCH_SUCCESS'
export const containerStatsFetchSuccess = (data, containerId) => ({
  type: CONTAINER_STATS_FETCH_SUCCESS,
  data: Object.assign(data, { Id: containerId })
})

export const CONTAINER_STATS_FETCH_ERROR = 'CONTAINER_STATS_FETCH_ERROR'
export const containerStatsFetchError = (error) => {
  return {
    type: CONTAINER_STATS_FETCH_ERROR,
    error: error.message || 'Something went wrong.',
    raw: error
  }
}

export const containerStatsFetch = (containerId) => (dispatch) => {
  return RestAPI
    .containers
    .stats(containerId)
    .then(stats => dispatch(containerStatsFetchSuccess(stats, containerId)))
    .catch(err => dispatch(containerStatsFetchError(err)))
}
