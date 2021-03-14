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
import Commercial from '../views/Commercial.vue'
import Reset from '../views/Reset.vue'
import ResetComplete from '../views/ResetComplete.vue'
import AdminLogin from '../views/Admin/AdminLogin.vue'
import ProductRegister from '../views/Admin/ProductRegister.vue'
import ProductLists from '../views/Admin/ProductLists.vue'
import AdminMypage from '../views/Admin/AdminMypage.vue'
import ProductListDetail from '../views/Admin/ProductListDetail.vue'
import NotFound from "../views/404.vue"
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
    meta: { requiresAuth: true },
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
    path: "/commercial",
    name: "Commercial",
    component: Commercial,
    props: true,
  },
  {
    path: "/reset",
    name: "Reset",
    component: Reset,
  },
  {
    path: "/reset_complete",
    name: "ResetComplete",
    component: ResetComplete,
  },
  {
    path: "/admin/login",
    name: "AdminLogin",
    component: AdminLogin,
  },
  {
    path: "/admin/register",
    name: "ProductRegister",
    component: ProductRegister,
    meta: {
      requiresAuth: true,
      adminUser: true,
    },
  },
  {
    path: "/admin/list",
    name: "ProductLists",
    component: ProductLists,
    meta: {
      requiresAuth: true,
      adminUser: true,
    },
  },
  {
    path: "/admin/list/:category_id/:id",
    name: "ProductListDetail",
    component: ProductListDetail,
    meta: {
      requiresAuth: true,
      adminUser: true,
    },
    props: true,
  },
  {
    path: "/admin/mypage",
    name: "AdminMypage",
    component: AdminMypage,
    meta: {
      requiresAuth: true,
      adminUser: true,
    },
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound
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
  const requiresAdmin = to.matched.some(recode => recode.meta.adminUser);
  if (requiresAuth && !(await firebase.getCurrentUser())) {
    if (requiresAdmin) {
      return next({ path: "/admin/login", query: { redirect: to.fullPath } });
    }
    return next({ path: "/login", query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router