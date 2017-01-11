import RestAPI from '../lib/api/rest'

export const FETCH_CONTAINER_LOGS_SUCCESS = 'FETCH_CONTAINER_LOGS_SUCCESS'
export const fetchContainerLogsSuccess = (containerId, data) => {
  return {
    type: FETCH_CONTAINER_LOGS_SUCCESS,
    containerId,
    data
  }
}

export const FETCH_CONTAINER_LOGS_ERROR = 'FETCH_CONTAINER_LOGS_ERROR'
export const fetchContainerLogsError = (error) => {
  return {
    type: FETCH_CONTAINER_LOGS_ERROR,
    error: error.message || 'Something went wrong.'
  }
}

export const fetchContainerLogs = (containerId) => (dispatch) => {
  return RestAPI
    .containers
    .logs(containerId)
    .then(logs => dispatch(fetchContainerLogsSuccess(containerId, logs)))
    .catch(err => dispatch(fetchContainerLogsError(err)))
}