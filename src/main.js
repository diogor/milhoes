import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Va from 'vue-atlas'
import 'vue-atlas/dist/vue-atlas.css'

Vue.config.productionTip = false
Vue.use(Va, 'en')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
