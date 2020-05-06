import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Inkline from '@inkline/inkline'
import vuetify from './plugins/vuetify';
import "vuetify/dist/vuetify.min.css";

import firebase from 'firebase';
import 'firebase/firestore';


Vue.use(Inkline);
Vue.use(vuetify);

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyA-0WTJFMGtxTmlC-82ghxidaBGfaNj11c",
  authDomain: "furniture-webshop.firebaseapp.com",
  databaseURL: "https://furniture-webshop.firebaseio.com",
  projectId: "furniture-webshop",
  storageBucket: "furniture-webshop.appspot.com",
  messagingSenderId: "301911091711",
  appId: "1:301911091711:web:c90b811537d1fbc55d9fca"
};

/* eslint-disable no-new */
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
  firebase.initializeApp(firebaseConfig);
  }
}).$mount('#app')

export const db = firebase.firestore();
