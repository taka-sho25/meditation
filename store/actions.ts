import { ActionTree } from 'vuex'
import { RootState } from './types'

const actions: ActionTree<RootState, RootState> = {
  setCurrentStatus({ commit }, payload) {
    commit('setCurrentStatus', { status: payload.status })
  }
}

export default actions
