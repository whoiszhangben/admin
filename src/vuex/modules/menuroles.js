import * as types from '../mutation-types'

const state = {
  main: []
}

const mutations = {
  [types.FETCH_MENUROLE] (state, roles) {
    state.main = roles
  }
}

export default {
  state,
  mutations
}
