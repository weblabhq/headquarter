const localStorage = window.localStorage
const prefix = 'wl_'

const get = (key) => JSON.parse(localStorage.getItem(prefix + key))
const set = (key, value) => localStorage.setItem(prefix + key, JSON.stringify(value))
const del = (key) => localStorage.removeItem(prefix + key)
const clear = () => localStorage.clear()

export default {
  get,
  set,
  del,
  clear
}
