import { createStore, MutationTree, ActionTree, GetterTree } from 'vuex'
import home from './home'
export default createStore({
  state: { ...home.state },
  mutations: { ...home.mutations },
  actions: { ...home.actions },
  getters: { ...home.getters },
  modules: {}
})

