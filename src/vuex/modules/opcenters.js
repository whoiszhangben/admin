import * as types from '../mutation-types'

const state = {
  main: []
}

const mutations = {
  [types.FETCH_OPCENTER] (state, opcenters) {
    state.main = opcenters
  }
}

export default {
  state,
  mutations
}
