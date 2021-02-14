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
import firebase from 'firebase';
import "firebase/auth";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/mypage",
    name: "Mypage",
    component: Mypage,
    // meta: { requiresAuth: true },
  },
  {
    path: "/likes",
    name: "Likes",
    component: Likes,
  },
  {
    path: "/carts",
    name: "Carts",
    component: Carts,
    // meta: { requiresAuth: true },
  },
  {
    path: "/pthanks",
    name: "PurchaseThanks",
    component: PurchaseThanks,
  },
  {
    path: "/cthanks",
    name: "ContactThanks",
    component: ContactThanks,
  },
  {
    path: "/contact",
    name: "ContactForm",
    component: ContactForm,
  },
  {
    path: "/contact_confirm",
    name: "ContactFormConfirm",
    component: ContactFormConfirm,
  },
  {
    path: "/category/:id",
    name: "Category",
    component: Category,
    props: true,
  },
  {
    path: "/category/:category_id/product/:id",
    name: "Product",
    component: Product,
    props: true,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

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

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(recode => recode.meta.requiresAuth);
  if (requiresAuth && !(await firebase.getCurrentUser())) {
    next({ path: "/login", query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router
