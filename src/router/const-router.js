import Layout from '@/pages/layout/index.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/home-page',
    meta: {
      hidden: false,
      title: '首页',
    },
    children: [
      {
        path: 'home-page',
        name: 'homePage',
        component: () => import('@/pages/home-page/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          isSingleMenu: true,
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue'),
    meta: {
      title: '登录',
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/pages/error-page/404.vue'),
    meta: {
      title: '错误页面',
      hidden: true,
    },
  }, //  '/:pathMatch(.*)' 和 '/:pathMatch(.*)*' 区别，就是捕获到的路由前面带不带 /
]
