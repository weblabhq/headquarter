import fetch from 'isomorphic-fetch'
import * as config from '../config'

const username = 'weblab'
const AUTH = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IndlYmxhYiIsInBsYW4iOnsibmFtZSI6IkZyZWUiLCJtYXhJbnN0YW5jZXMiOjV9LCJhY3RpdmUiOnRydWUsImlhdCI6MTQ4MzUyMDE0OSwiZXhwIjoxNDg0MTI0OTQ5LCJpc3MiOiJ3ZWJsYWItYXV0aGVudGljYXRvciJ9.Mwwyo513fSnObY0adqZDE05heXxDUewzurxmLGyDnOE';

/**
 * Performs a GET request to Weblab API.
 *
 * @param {String} url - The endpoint route path
 * @returns {Promise}
 */
const get = url => {
  url = url.indexOf('?') !== -1
    ? url + '&'
    : url + '?'
  url = url + 'access_token=' + AUTH

  return fetch(`${config.API_URL}/v1${url}`, {
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Performs a GET request to Weblab API and parses response as JSON.
 *
 * @param {String} url - The endpoint route path
 * @returns {Promise}
 */
const getJSON = url => get(url).then(response => response.json())

/**
 * Performs a GET request to Weblab API and parses response as TEXT.
 *
 * @param {String} url - The endpoint route path
 * @returns {Promise}
 */
const getText = url => get(url).then(response => response.text())

/**
 * Containers related APIs
 */
const containers = {
  stats: containerId => getJSON(`/users/${username}/containers/${containerId}/stats`),
  logs: containerId => getText(`/users/${username}/containers/${containerId}/logs?stdout=1`)
}

/**
 * Microservices related APIs
 */
const microservices = {
  list: () => getJSON(`/users/${username}/microservices`)
}

export default {
  microservices,
  containers
}
