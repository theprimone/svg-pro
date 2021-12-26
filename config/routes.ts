export default [
  {
    path: '/',
    component: './layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/draw',
      },
      {
        path: '/draw',
        icon: 'edit',
        name: '绘图',
        component: './pages/Draw',
      },
      {
        path: '/shapes',
        icon: 'bulb',
        name: '图形',
        component: './pages/Shapes',
      },
    ],
  },
  {
    component: './pages/404',
  },
];
