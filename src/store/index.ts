import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import 'firebase/firestore'
import config from "../../firebase"
import router from '@/router'

Vue.use(Vuex)
firebase.initializeApp(config);

export default new Vuex.Store({
  // STATE ----------------------------------------------------------------------
  state:{
  user: null,
  loading: false,
  error: null,
  roomsType: [],
  products: []
  },

// MUTATIONS ----------------------------------------------------------------------
  mutations: {
    setUser(state, payload){
      state.user = payload
    },

    setLoading(state, payload){
      state.loading = payload
    },

    setError(state, payload){
      state.error = payload
    },

    clearError(state){
      state.error = null
    },

    setRoomsType(state, payload){
      state.roomsType = payload

    },

    getProducts(state, payload){
      state.products = payload
    },

    deleteProduct(state, payload){
      // var data = []
      state.products.filter(item => item !== payload)

    }
  },

// ACTIONS ------------------------------------------------------------------------
  actions: {
    signUserIn({commit}, payload){
      commit('setLoading', true)
      commit('ClearError')
      firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
          commit('setLoading', false)
          commit('setUser',user)   
      })
      .catch(function(error) {
      commit('setLoading', false)
      commit('setError', error)

        console.log(error);
      })
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
      // firebase.auth().signOut()
      //   alert("Logged out!");
      //   commit('setUser', null)
        
    },

    clearError({commit}){
      commit('clearError')
    },

    getRoomsType({commit}){
      const roomsType = firebase.firestore().collection("Room Type");


      roomsType.get().then(rooms => {
              const roomsType =[]

              rooms.forEach(room => {
                roomsType.push(room.id)
                
              })
              commit('setRoomsType', roomsType)
                
            })
            .catch(function(error: Error) {
              console.log("Error getting document:", error);
            });

      
    },

    createProduct({commit}, payload){
        const product = {
          roomsType: payload.roomsType,
          color: payload.color,
          description: payload.description,
          discount: payload.discount,
          image: payload.image,
          name: payload.name,
          price: payload.price,
          size: payload.size
        }
        const doc = firebase.firestore().collection('Products').doc()
        doc.set(product)
        .then(()=>{
          const key = doc.id
            console.log(key)
            // commit('CreateProduct',{
            //   ...product,
            //   id:key
            // })

        }).catch((error)=>{
          console.log(error)
        })
    },

     getProducts({commit}){
      commit('setLoading',true)
        const products = firebase.firestore().collection("Products");

        products.get().then((snapshot) => {
            if (snapshot.docs) {
              
                const products = []
                snapshot.docs.forEach(doc => {
                  const id = doc.id

                  const data = {id:id, data: doc.data() }
                  // data.push(id)
                  // data.push(doc.data())
                  products.push(data)
                  // console.log(doc.data())
                });
                commit('getProducts', products)
                commit('setLoading',false)


            } else {

                console.log("No documents!");
                commit('setLoading',false)

            }
        }).catch(function(error) {
            console.log("Error getting documents:", error);
            commit('setLoading',false)

        });
    },
    deleteProduct({commit}, payload){
      const product = firebase.firestore().collection("Products");
      
      product.doc(payload).delete().then(function() {
        console.log("Document successfully deleted!");
        commit('deleteProduct', payload)
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    })
    },
    autoSignIn({commit}, payload){
      commit('setUser', {id: payload.uid, products: []})
    }

    
  },

// MODULES ------------------------------------------------------------------------
  modules: {
  },

// GETTERS ------------------------------------------------------------------------
  getters:{
    user(state){
      return state.user
    },
    loading(state){
      console.log(state.loading)

      return state.loading
    },
    error(state){
      return state.error
    },
    products(state){
      console.log(state.products)
      return state.products
    },
    roomsType(state){
      console.log(state.roomsType)

      return state.roomsType
    }

  }
})



// import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

// export default new VuexModule({


// })