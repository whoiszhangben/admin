import * as types from '../mutation-types'

const state = {
  main: []
}

const mutations = {
  [types.FETCH_ADMIN] (state, admins) {
    state.main = admins
  }
}

export default {
  state,
  mutations
}
