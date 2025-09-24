
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '',
        redirect: '/order'
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('@/pages/order/index.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('@/layouts/admin/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'Admin',
        component: () => import('@/pages/admin/index.vue'),
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/pages/dashboard/index.vue'),
      },
      {
        path: 'products',
        name: 'AdminProducts',
        component: () => import('@/pages/admin/products/index.vue'),
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: () => import('@/pages/admin/orders/index.vue'),
      },
      {
        path: 'menu',
        name: 'AdminMenu',
        component: () => import('@/pages/admin/menu/index.vue'),
      },
      {
        path: 'tables',
        name: 'AdminTables',
        component: () => import('@/pages/admin/tables/index.vue'),
      },
      {
        path: 'revenue',
        name: 'AdminRevenue',
        component: () => import('@/pages/admin/revenue/index.vue'),
      },
      {
        path: 'promotions',
        name: 'AdminPromotions',
        component: () => import('@/pages/admin/promotions/index.vue'),
      },
      {
        path: 'settings',
        name: 'AdminSettings',
        component: () => import('@/pages/admin/settings/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
