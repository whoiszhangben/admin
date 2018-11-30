import * as types from '../mutation-types'

const state = {
  main: []
}

const mutations = {
  [types.FETCH_CUSTOMER] (state, customers) {
    state.main = customers
  }
}

export default {
  state,
  mutations
}
