import { createRouter, createWebHashHistory } from 'vue-router'
import OptionsView from '../views/OptionsView.vue'

const routes = [
  {
    path: '/',
    name: 'options',
    component: OptionsView
  },
  {
    path: '/composition',
    name: 'composition',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CompositionView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
