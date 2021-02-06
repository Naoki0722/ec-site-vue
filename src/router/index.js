import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Mypage from '../views/Mypage.vue'
import Likes from '../views/Likes.vue'
import PurchaseThanks from '../views/PurchaseThanks.vue'
import ContactThanks from '../views/ContactThanks.vue'
import ContactForm from '../views/ContactForm.vue'
import ContactFormConfirm from '../views/ContactFormConfirm.vue'
import Category from '../views/Category.vue'
import Product from '../views/Product.vue'
import Carts from '../views/Carts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/mypage',
    name: 'Mypage',
    component: Mypage
  },
  {
    path: '/likes',
    name: 'Likes',
    component: Likes
  },
  {
    path: '/carts',
    name: 'Carts',
    component: Carts
  },
  {
    path: '/pthanks',
    name: 'PurchaseThanks',
    component: PurchaseThanks
  },
  {
    path: '/cthanks',
    name: 'ContactThanks',
    component: ContactThanks
  },
  {
    path: '/contact',
    name: 'ContactForm',
    component: ContactForm
  },
  {
    path: '/contact_confirm',
    name: 'ContactFormConfirm',
    component: ContactFormConfirm
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
