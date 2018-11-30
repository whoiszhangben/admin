import axios from 'axios'

export default {
  getAll (request = {}) {
    return axios.get('http://localhost:3000/profiles', request)
      .then(response => resolve(response))
      .catch(error => reject(error))
  }
}
