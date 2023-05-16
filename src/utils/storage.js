const Storage = {
  get(key) {
    return JSON.parse(localStorage.getItem(key))
  },
  set(key, value = {}) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  clearAll() {
    localStorage.clear()
  },
  removeItem(key) {
    localStorage.removeItem(key)
  },
}

export default Storage
