import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from "firebase";
import "firebase/auth";
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

export const initialState = {
  user: '',
  status: false,
  token: '',
  carts: [],
  likes: []
}


export default new Vuex.Store({
  state: initialState,
  mutations: {
    userLogin(state, payload) {
      state.user = payload;
    },
    userLogout(state, user) {
      state.token = user;
      state.user = user;
    },
    onUserStatusChanged(state, status) {
      state.status = status;
    },
    getToken(state, token) {
      state.token = token;
    },
    userEdit(state, { name, email, tell_number }) {
      state.user.name = name;
      state.user.email = email;
      state.user.tell_number = tell_number;
    },
    addCart(
      state,
      { id, category_name, product_name, description, price, image_url }
    ) {
      state.carts.push({
        id: id,
        category_name: category_name,
        product_name: product_name,
        description: description,
        price: price,
        image_url: image_url,
      });
    },
    addLike(
      state,
      { id, category_name, product_name, description, price, image_url }
    ) {
      state.likes.push({
        id: id,
        category_name: category_name,
        product_name: product_name,
        description: description,
        price: price,
        image_url: image_url,
      });
    },
    delCart(state, product) {
      state.carts.length = 0;
      state.carts = product;
    },
    delLike(state, product) {
      state.likes.length = 0;
      state.likes = product;
    },
    initialDelCart(state) {
      state.carts.length = 0;
    },
    initialDelLike(state) {
      state.likes.length = 0;
    },
  },
  actions: {
    async login({ commit }, { email }) {
      const responseLogin = await axios.post(
        "https://gentle-wildwood-14193.herokuapp.com/api/login",
        {
          email: email,
        }
      );
      const responseUser = await axios.get(
        `https://gentle-wildwood-14193.herokuapp.com/api/users/${responseLogin.data.data.id}`
      );
      commit("userLogin", responseUser.data.data);
    },
    async adminLogin({ commit }, { email, token }) {
      const responseLogin = await axios.post(
        "https://gentle-wildwood-14193.herokuapp.com/api/admin/login",
        {
          email: email,
          token: token
        }
      );
      const responseUser = await axios.get(
        `https://gentle-wildwood-14193.herokuapp.com/api/users/${responseLogin.data.data.id}`
      );
      commit("userLogin", responseUser.data.data);
    },
    getToken({ commit }, { token }) {
      commit("getToken", token)
    },
    logout({ commit }) {
      commit("userLogout", "");
    },
    onAuth({ commit }) {
      firebase.auth().onAuthStateChanged((user) => {
        user = user ? user : {};
        commit("onUserStatusChanged", user.uid ? true : false);
      });
    },
    editUser({ commit }, { name, email, tell_number }) {
      commit("userEdit", {
        name: name,
        email: email,
        tell_number: tell_number,
      });
    },
    addGuestCart(
      { state, commit },
      { id, category_name, product_name, description, price, image_url }
    ) {
      const cartItem = state.carts.find((item) => item.id === id);
      if (!cartItem) {
        commit("addCart", {
          id: id,
          category_name: category_name,
          product_name: product_name,
          description: description,
          price: price,
          image_url: image_url,
        });
      } else {
        alert("すでに追加済みです");
      }
    },
    addGuestLike(
      { state, commit },
      { id, category_name, product_name, description, price, image_url }
    ) {
      const likeItem = state.likes.find((item) => item.id === id);
      if (!likeItem) {
        commit("addLike", {
          id: id,
          category_name: category_name,
          product_name: product_name,
          description: description,
          price: price,
          image_url: image_url,
        });
      } else {
        alert("すでに追加済みです");
      }
    },
    delGuestCart({ commit }, product) {
      commit("delCart", product);
    },
    delGuestLike({ commit }, product) {
      commit("delLike", product);
    },
    initialCart({ commit }) {
      commit("initialDelCart");
    },
    initialLike({ commit }) {
      commit("initialDelLike");
    },
  },
  modules: {},
  plugins: [
    createPersistedState({
      key: "EcApp",
      storage: window.sessionStorage,
    }),
  ],
});
