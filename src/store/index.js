import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    balance: 0.0
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item)
      state.balance -= parseFloat(item.valor.replace(",", "."))
    },
    addFunds(state, valor) {
      state.balance += valor
    },
    clearItems(state) {
      state.items = []
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
