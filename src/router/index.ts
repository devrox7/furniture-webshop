import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Products from '../components/products/Products.vue'
import CreateProduct from '../components/products/CreateProduct.vue'
import Login from '../components/admin/Login.vue'
import firebase from 'firebase';
import "firebase/firestore";
import AuthGuard from './auth-guard';

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin-panel',
    name: 'Admin Panel',
    component: Admin,
    // meta: {
    //   requiresAuth: true
    // }
    beforeEnter:AuthGuard
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    // meta: {
    //   requiresAuth: true
    // }
    beforeEnter:AuthGuard

  },
  {
    path: '/create-product',
    name: 'Create Product',
    component: CreateProduct,
    // meta: {
    //   requiresAuth: true
    // }
    beforeEnter:AuthGuard

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})



// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if(requiresAuth && !currentUser) next('login');
//   else next();
//   // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   // else next()
// });

export default router
