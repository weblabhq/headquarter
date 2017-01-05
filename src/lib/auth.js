import localStorage from './local-storage'

// Token
export const getAccessToken = () => localStorage.get('access_token')

// Logged in username
export const getUsername = () => localStorage.get('username')

// Check if user is logged in
export const isLoggedIn = () => !!getAccessToken()

export default {
  getAccessToken,
  getUsername,
  isLoggedIn
}