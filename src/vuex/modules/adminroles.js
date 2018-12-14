import * as types from '../mutation-types'

const state = {
  main: []
}

const mutations = {
  [types.FETCH_ADMINROLE] (state, adminroles) {
    state.main = adminroles
  }
}

export default {
  state,
  mutations
}
