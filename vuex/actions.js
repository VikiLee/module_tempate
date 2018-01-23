//export all actions

import * as types from './mutation-types'


export default {
  getUserinfo({ commit }, args) {
    commit(types.TEST, args)
  }
}
