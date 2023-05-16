const Layout = () => import('@/pages/layout/index.vue')

export default [
  {
    path: '/signal-config',
    name: 'signalConfig',
    component: Layout,
    meta: {
      title: '信号配置',
      hidden: false,
      roles: ['hats.basicConfig'],
    },
    children: [
      {
        path: 'signal-admin',
        name: 'signalAdmin',
        component: () => import('@/pages/signal-config/signal-admin/index.vue'),
        meta: {
          title: '信号管理',
          hidden: false,
          roles: ['hats.signCollocate'],
        },
        children: [{
          path: 'test',
          name: 'test',
          component: () => import('@/pages/signal-config/signal-admin/index.vue'),
          meta: {
            title: '测试',
            hidden: false,
            roles: ['hats.signCollocate'],
          },
        }]
      },
      {
        path: 'log-config',
        name: 'logConfig',
        component: () => import('@/pages/signal-config/log-config/index.vue'),
        meta: {
          title: '记录配置',
          hidden: false,
          roles: ['hats.signalLogConfig'],
        },
      },
      {
        path: 'equipment-admin',
        name: 'equipmentAdmin',
        component: () => import('@/pages/signal-config/equipment-admin/index.vue'),
        meta: {
          title: '设备管理',
          hidden: false,
          roles: ['hats.signal'],
        },
      },
    ],
  },
]
