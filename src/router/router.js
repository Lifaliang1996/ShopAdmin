import Vue from "vue"
import Router from "vue-router"

import routes from "./routers"

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('userInfo')) {
    if (to.name == 'login') {
      next();
    } else {
      next('/login')
    }
  } else {
    next();
  }
})

export default router