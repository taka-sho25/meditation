import { ActionTree } from 'vuex'
import { RootState } from './types'

const actions: ActionTree<RootState, RootState> = {
  setCurrentStatus({ commit }, payload) {
    commit('setCurrentStatus', { status: payload.status })
  },
  setUseSound({ commit }, payload) {
    commit('setUseSound', { name: payload.name })
  }
}

export default actions
