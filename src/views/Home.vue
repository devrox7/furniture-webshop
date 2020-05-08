<template>
  <v-card class="mx-auto" style="min-width:50%; margin: 50px">
    <v-container>
      <h1>Welcome</h1>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="12" xl="12">Take a look at our furniture variations.</v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Home"
})
export default class Home extends Vue {}
</script>
