import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Inkline from '@inkline/inkline'
import vuetify from './plugins/vuetify';
import "vuetify/dist/vuetify.min.css";
import Alert from "./components/shared/Alert.vue";




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


    this.$store.dispatch('getProducts');
  }
}).$mount('#app')
// firebase.initializeApp(firebaseConfig);

