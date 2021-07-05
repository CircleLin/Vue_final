import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/products',
    component: () => import('../views/Products.vue'),
  },
  {
    path: '/products/:id',
    component: () => import('../views/Detail.vue'),
  },
  {
    path: '/cart',
    component: () => import('../views/Cart.vue'),
  },
  {
    path: '/order',
    component: () => import('../views/Order.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
