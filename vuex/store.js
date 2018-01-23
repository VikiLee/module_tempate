//where we assemble modules and export the store

import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import * as types from './mutation-types'


Vue.use(Vuex)

const state = {

}

const mutations = {
  [types.TEST](state, args) {
    console.log();
  }
}

export default new Vuex.Store({
  actions,
  state,
  mutations
})