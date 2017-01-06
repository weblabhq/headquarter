import request from 'superagent'

import { API_URL } from '../config'
import auth from '../auth'

/**
 * Containers related APIs
 */
const containers = {
  stats: containerId => request
    .get(`${API_URL}/v1/users/${auth.getUsername()}/containers/${containerId}/stats`)
    .query({ access_token: auth.getAccessToken() })
    .then(response => response)
    .then(data => JSON.parse(data.text)),

  logs: containerId => request
    .get(`${API_URL}/v1/users/${auth.getUsername()}/containers/${containerId}/logs`)
    .query({ access_token: auth.getAccessToken() })
    .query({ stdout: 1, stderr: 1 })
    .then(response => response.text),
}

/**
 * Microservices related APIs
 */
const microservices = {
  list: () => request
    .get(`${API_URL}/v1/users/${auth.getUsername()}/microservices`)
    .query({ access_token: auth.getAccessToken() })
    .then(response => response.body),
}

/**
 * Users related APIs
 */
const users = {
  login: (payload) => request
    .post(`${API_URL}/v1/account/login`)
    .send(payload)
    .then(response => response.body),

  register: (payload) => request
    .post(`${API_URL}/v1/account/register`)
    .send(payload)
    .then(response => response.body)
}

export default {
  microservices,
  containers,
  users
}
