import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import 'firebase/firestore'
import config from "../../firebase"

Vue.use(Vuex)
firebase.initializeApp(config);

export default new Vuex.Store({
  state:{
  db: firebase.firestore(),
  user: null
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    }


  },
  actions: {
    signUserIn({commit}, payload){
      firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
      
          commit('setUser',user)
      })
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === "auth/wrong-password") {
          alert("Wrong password!");
        } else {
          alert(errorMessage);
        }

        console.log(error);
      });
    },
    signOut({commit}) {
      firebase
        .auth()
        .signOut()
        .then(()=> {
          commit('setUser',null)
        alert("Logged out!");
        })
        .catch(function(error) {
          console.log(error);
          // An error happened.
        });
    }
    
  },
  modules: {
  },
  getters:{
    user(state){
      return state.user
    }
  }
})
