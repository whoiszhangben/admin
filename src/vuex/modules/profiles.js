import * as types from '../mutation-types'

const state = {
  main: []
}

const mutations = {
  [types.FETCH_PROFILE] (state, profiles) {
    state.main = profiles
  }
}

export default {
  state,
  mutations
}
