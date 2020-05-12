import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Inkline from '@inkline/inkline'
import vuetify from './plugins/vuetify';
import "vuetify/dist/vuetify.min.css";
import Alert from "./components/shared/Alert.vue";

import firebase from 'firebase'
import 'firebase/firestore'


Vue.use(Inkline);
Vue.use(vuetify);

Vue.config.productionTip = false
Vue.component("app-alert", Alert);


/* eslint-disable no-new */
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
}).$mount('#app')


