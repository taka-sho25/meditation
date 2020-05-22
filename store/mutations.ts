import { MutationTree } from 'vuex'
import { RootState } from './types'

const mutations: MutationTree<RootState> = {
  setCurrentStatus(state, payload) {
    state.currentStatus = payload.status
  },
  setUseSound(state, payload) {
    state.soundName = payload.name
  }
}

export default mutations
