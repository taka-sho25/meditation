import { GetterTree } from 'vuex'
import { RootState } from './types'

const getters: GetterTree<RootState, RootState> = {
  currentStatus: state => state.currentStatus,
  soundName: state => state.soundName
}

export default getters
