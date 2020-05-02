<template>
  <v-app id="app">
    <navigation/>
    

    <v-content>
      <!-- <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center"> -->
            <router-view/>

          <!-- </v-col>
        </v-row>
      </v-container> -->
    </v-content>
  </v-app>
</template>

<script>
import navigation from './components/navigation.vue'

export default {
  components:{
    navigation
  },
  name: "App"
};
</script>

<style>
main{
  background-color:#f9f9fc;
  color: #646c9a;
  font-family: 'Poppins', sans-serif;
}
</style>