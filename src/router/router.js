import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const Login = () => import('@/views/Login.vue')

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
  mode: 'history'
})