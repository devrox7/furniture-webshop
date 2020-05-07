<template>
<div>
  <div v-if="currentUser !==null">
  <v-navigation-drawer  color='primary' v-model='drawer' app>
  <br>
  <div class='nav-head' text-center>
  <h4>ADMIN PANEL</h4>
  </div>
      <v-list dense>
  
  <v-list-item link to="admin-panel">
          <v-list-item-action>
            <v-icon>mdi-home-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Admin Side</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

          <v-list-item link to="products">
          <v-list-item-action>
            <v-icon>mdi-text-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Products</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
          <v-btn align="end" style="margin:30px" class='d-flex justify-content-center'  @click.prevent="signOut()">Logout </v-btn>

    </v-navigation-drawer>
  </div>
    <v-app-bar app >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title> 
        <v-row>
        <!-- <img alt="Vue logo" src='../assets/images/logo.png' style='max-width:70px'> -->
        <v-col>
          <h3>Furniture Webshop</h3>
        </v-col>
        <v-col>
          <!-- <v-btn class='mb-2' to="/login" color="primary">Admin Login  <v-icon>mdi-shield-account</v-icon></v-btn>0 -->
        </v-col>
        </v-row>

      </v-toolbar-title>
   
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/">Home</v-tab>
          <v-tab  to="/about">About</v-tab>
          <!-- <v-tab to="/login">LOGIN</v-tab> -->
          <!-- <v-tab to="/admin-panel">Admin </v-tab> -->
        </v-tabs>
                  <v-btn v-if="currentUser == null " class='mb-2' to="/login" color="primary">Admin<v-icon>mdi-shield-account</v-icon></v-btn>

      </template>
    </v-app-bar>
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
// import Login from "./admin/Login.vue";
import firebase from 'firebase';
import "firebase/firestore";
import store from '../store/index'



@Component
export default class Navigation extends Vue{
  

  drawer;

  constructor(){
    super();

    this.checkUser();
   

    this.drawer = false;
  }

  checkUser(){
        firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        store.dispatch('setUser', user)
         console.log(this.currentUser);
    console.log("current ussseerr");
      } else {
        store.dispatch('setUser', null)
         console.log(this.currentUser);
    console.log("current ussseerr nullll");
      }
    });
  }

get currentUser() {
        return this.$store.getters.currentUser;
      }

  signOut(){
    firebase.auth().signOut().then(function() {
    alert('Logged out!');
    this.$router.replace('/');

    // Sign-out successful.
    }).catch(function(error) {
        alert(error);
    // An error happened.
    });
  }

}
</script>




<style lang="scss">
.nav-head{
  font-family: 'Poppins', sans-serif !important; 
  text-align: center;
  margin-bottom: 16px; 
  letter-spacing:2px
}

.theme--light.v-app-bar.v-toolbar.v-sheet {
    background-color: #ffffff !important;
}

.v-toolbar__title{
      color: #535b86 !important;
    font-family: 'Poppins', sans-serif !important;
    letter-spacing: 3px !important;
}


.v-list-item__content {
    color: rgba(255, 255, 255, 0.87)!important;
    font-weight: bold !important;
    letter-spacing: 0.5px;

}

</style>