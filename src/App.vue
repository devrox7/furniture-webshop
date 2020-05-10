<template>
  <v-app id="app">
    <navigation />

    <v-content>
      <!-- <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
      <v-col class="text-center">-->

      <router-view />

      <!-- </v-col>
        </v-row>
      </v-container>-->
    </v-content>
  </v-app>
</template>
 
<script>
import { Component, Vue } from "vue-property-decorator";

import Navigation from "./components/Navigation.vue";

@Component({
  name: "App",
  components: {
    Navigation
  }
})
export default class App extends Vue {}
</script>

<style>
main {
  background-color: #f9f9fc;
  color: #646c9a;
  font-family: "Poppins", sans-serif;
}
</style>