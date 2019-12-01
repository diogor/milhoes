import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Inserir from '../views/Inserir.vue'
import Receber from '../views/Receber.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/inserir',
    name: 'inserir',
    component: Inserir
  },
  {
    path: '/receber',
    name: 'receber',
    component: Receber
  }
]

const router = new VueRouter({
  routes
})

export default router
