import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/tailwind.css";
import VueScrollTo from "vue-scrollto";
import firebase from 'firebase';
import "firebase/auth";



/* font-awesomeここから */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueScrollTo);

const firebaseConfig = {
  apiKey: "AIzaSyArptw38DFBMOHg6Czz4gShEgwKEInKQ38",
  authDomain: "tokuda-ec-site.firebaseapp.com",
  projectId: "tokuda-ec-site",
  storageBucket: "tokuda-ec-site.appspot.com",
  messagingSenderId: "1078845768793",
  appId: "1:1078845768793:web:ff0da032f021c8e15ddd48"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// 認証情報はsessionで保持
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe()
      resolve(user);
    }, reject);
  });
};


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
