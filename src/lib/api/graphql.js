import request from 'superagent'

import { API_URL } from '../config'
import auth from '../auth'

const send = query => request
  .post(`${API_URL}/v2/`)
  .set('Authorization', `JWT ${auth.getAccessToken()}`)
  .accept('json')
  .send({ query })
  .then(response => response.body.data)

export default send
