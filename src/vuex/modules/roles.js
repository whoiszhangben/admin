import * as types from '../mutation-types'

const state = {
  main: []
}

const mutations = {
  [types.FETCH_ROLE] (state, roles) {
    state.main = roles
  }
}

export default {
  state,
  mutations
}
