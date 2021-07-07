import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    // 前台路由
    path: '/',
    component: () => import('../views/Front.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'products/:id',
        component: () => import('../views/Detail.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/Cart.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/Order.vue'),
      },
      {
        path: 'pay/:order_Id',
        component: () => import('../views/Pay.vue'),
      },
      {
        path: 'complete',
        component: () => import('../views/Complete.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
