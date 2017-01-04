import { push } from 'react-router-redux'

import localStorage from './local-storage'
import RestAPI from './api/rest'

// Token
export const getToken = () => localStorage.get('token')

// Logged in username
export const getUsername = () => localStorage.get('username')

// Check if user is logged in
export const isLoggedIn = () => !!getToken()

// Logout user
export const logout = () => {
  localStorage.del('token')
  localStorage.del('username')
  push('/')
}

// Get login token
export const login = (email, password) => RestAPI
  .post('/account/login', {
    email,
    password
  })
  .then((response) => {
    localStorage.set('token', response.token)
    localStorage.set('username', response.username)
    return response
  })

export default {
  getToken,
  getUsername,
  isLoggedIn,
  logout,
  login
}