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
  {
    // 後台路由
    path: '/admin',
    component: () => import('../views/admin/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/DashboardProducts.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/admin/DashboardOrders.vue'),
      },
      {
        path: 'addproduct',
        component: () => import('../views/admin/Addproduct.vue'),
      },
      {
        path: 'editproduct/:id',
        component: () => import('../views/admin/EditProduct.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/admin/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
