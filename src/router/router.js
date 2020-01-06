import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/Index.vue')
    }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('userInfo')) {
    if (to.name == 'login') {
      next( );
    } else {
      next('/login')
    }
  } else {
    next();
  }
})

export default router