import * as types from '../mutation-types'

const state = {
  main: {
    name: 'admin',
    position: 'admin',
    state: {
      color: '#3c763d',
      name: 'Online'
    },
    createdAt: new Date()
  }
}

const mutations = {
  [types.FETCH_CURRENTUSER] (state, user) {
    state.main = user
  }
}

export default {
  state,
  mutations
}
