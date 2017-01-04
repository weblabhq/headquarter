import fetch from 'isomorphic-fetch'
import { API_URL } from '../config'

const query = q => fetch(API_URL + '/v2/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IndlYmxhYiIsInBsYW4iOnsibmFtZSI6IkZyZWUiLCJtYXhJbnN0YW5jZXMiOjV9LCJhY3RpdmUiOnRydWUsImlhdCI6MTQ4MzUyMDE0OSwiZXhwIjoxNDg0MTI0OTQ5LCJpc3MiOiJ3ZWJsYWItYXV0aGVudGljYXRvciJ9.Mwwyo513fSnObY0adqZDE05heXxDUewzurxmLGyDnOE',
  },
  body: JSON.stringify({ query: q })
})
.then(response => response.json())
.then(response => response.data)

export default query
