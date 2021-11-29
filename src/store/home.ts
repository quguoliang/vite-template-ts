import { MutationTree, ActionTree, GetterTree } from 'vuex'

interface homeState {
  userInfo: any
}

function initialState(): homeState {
  return {
    userInfo: {}
  }
}
const state: homeState = initialState()

const mutations: MutationTree<homeState> = {
  SET_USER(state, payload) {
    state.userInfo = payload
  }
}

const actions: ActionTree<homeState, homeState> = {
  async getUser({ commit }) {
    const userInfo = { username: '张三' }
    commit('SET_USER', userInfo)
  }
}
const getters: GetterTree<homeState, homeState> = {
  hasUser(state) {
    return state.userInfo
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}