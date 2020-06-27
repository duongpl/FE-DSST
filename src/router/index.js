import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/expected/index'),
      meta: { title: 'Expected', icon: 'example' }
    }]
  },
  {
    path: '/manage',
    component: Layout,
    redirect: '/manage',
    name: 'Nested',
    children: [{
      path: 'manage',
      name: 'Manage',
      component: () => import('@/views/manage/index'),
      meta: { title: 'Manage', icon: 'tree', roles: 'ROLE_ADMIN' }
    }]
  },

  {
    path: '/request',
    component: Layout,
    redirect: '/request',
    name: 'Request',
    children: [{
      path: 'request',
      name: 'Request',
      component: () => import('@/views/data-process/index'),
      meta: { title: 'DSTT', icon: 'graphic', roles: 'ROLE_ADMIN' }
    }]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    notShowMenu: true,
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      notShowMenu: false,
      component: () => import('@/views/arrange/index'),
      meta: { title: 'Arrange', icon: 'nested', roles: 'ROLE_ADMIN' }
    }]
  },
  {
    path: '/infomation',
    component: Layout,
    notShowMenu: true,
    children: [{
      path: 'information',
      notShowMenu: true,
      name: 'Information',
      component: () => import('@/views/profile/index'),
      meta: { title: 'Information', icon: 'link' }
    }]
  },

  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/calendar-view/index'),
      meta: { title: 'Timetable', icon: 'dashboard' }
    }]
  },

  {
    path: '/report',
    component: Layout,
    redirect: '/report',
    name: 'Report',
    children: [{
      path: 'report',
      name: 'Report',
      component: () => import('@/views/request/index'),
      meta: { title: 'Request', icon: 'form', noCache: true }
    }]
  },

  {
    path: '/history',
    component: Layout,
    redirect: '/history',
    name: 'History',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/history/index'),
      meta: { title: 'History', icon: 'history', noCache: true, roles: 'ROLE_ADMIN' }
    }]
  },
  // {
  //   path: '/abc',
  //   component: Layout,
  //   redirect: '/abc',
  //   name: 'Abc',
  //   children: [{
  //     path: 'abc',
  //     name: 'Abc',
  //     component: () => import('@/views/abc/index'),
  //     meta: { title: 'abc', icon: 'form', noCache: true }
  //   }]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

const role = JSON.parse(localStorage.getItem('infoUser')) ? JSON.parse(localStorage.getItem('infoUser')).role.roleName : {}

router.beforeEach((to, from, next) => {
  // console.log('role', role)
  // console.log('to.meta.roles, to.meta.roles')

  if (to.meta.roles && to.meta.roles === role || !to.meta.roles || role) {
    next()
  } else {
    // console.log('hiih')
  }
})

