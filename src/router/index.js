import Vue from 'vue';
import VueRouter from 'vue-router';
// import Layout from '../views/layout/Layout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/layout/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/layout/Home.vue'),
      },
      {
        path: '/health',
        name: 'Health',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/layout/Health.vue'),
      },
      {
        path: '/policy',
        component: () => import('../views/layout/Policy.vue'),
      },
      {
        path: '/products',
        component: () => import('../views/layout/Products.vue'),
      },
      {
        path: '/product/:id',
        component: () => import('../views/layout/Product.vue'),
      },
      {
        path: '/cart',
        component: () => import('../views/layout/CartList.vue'),
      },
      {
        path: '/orderForm',
        component: () => import('../views/layout/orderForm.vue'),
      },
      {
        path: '/checkout/:id',
        component: () => import('../views/layout/Checkout.vue'),
      },
      {
        path: '/test',
        component: () => import('../views/layout/test.vue'),
      },
    ],
  },
  {
    path: '/backendhome',
    component: () => import('../views/BackendHome.vue'),
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin/',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/dashboard/Admin.vue'),
      },
      {
        path: '/admin/products',
        component: () => import('../views/dashboard/Products.vue'),
      },
      {
        path: '/admin/storages',
        name: '圖片列表',
        component: () => import('../views/dashboard/Storages.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/admin/coupons',
        component: () => import('../views/dashboard/Coupons.vue'),
      },
      {
        path: '/admin/orders',
        component: () => import('../views/dashboard/Orders.vue'),
      },
      {
        path: '/admin/customer_order',
        name: '摸擬用戶購物',
        component: () => import('../views/dashboard/CustomerOrder.vue'),
      },
      {
        path: '/admin/CustomerCheckout',
        name: '摸擬用戶下單',
        component: () => import('../views/dashboard/CustomerCheckout.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
