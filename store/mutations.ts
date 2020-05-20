import { MutationTree } from 'vuex'
import { RootState } from './types'

const mutations: MutationTree<RootState> = {
  setCurrentStatus(state, payload) {
    state.currentStatus = payload.status
  }
}

export default mutations
