<template>
<div>
<v-navigation-drawer color='primary' v-model='drawer' app>
  <br>
  <p >ADMIN PANEL</p>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Orders</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Accounts</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="Products">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Products</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title> <div>
        <!-- <img alt="Vue logo" src='../assets/images/logo.png' style='max-width:70px'> -->
        <h3>Furniture Webshop</h3>
        </div>
      </v-toolbar-title>
   
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/">Home</v-tab>
          <v-tab  to="/about">About</v-tab>
          <v-tab to="/login">LOGIN</v-tab>
          <v-tab to="/admin-panel">Admin</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
// import { dbRooms } from "../../firebase.js";

@Component
export default class Navigation extends Vue{
  drawer = false;




}
</script>

<style lang="scss">
.theme--light.v-app-bar.v-toolbar.v-sheet {
    background-color: #ffffff !important;
}

.v-toolbar__title{
      color: #535b86 !important;
    font-family: 'Poppins', sans-serif !important;
    letter-spacing: 3px !important;
}

.theme--light.v-list-item{
  color:#ffffff !important;
}

</style>