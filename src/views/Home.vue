<template>
  <div class="container-content">
    <div class="content-view">
      <!-- <v-card class="mx-auto" style="min-width:50%; margin: 50px">
        <v-container>
          <h1>Welcome</h1>
          <v-divider></v-divider>
          <v-row>
            <v-col
              cols="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
            >Take a look at our furniture variations.</v-col>
            <div :v-for="product in products">
              <v-card class="mx-auto" max-width="400">
                <v-img class="white--text align-end" height="200px" src="/">
                  <v-card-title>{{product.name}}</v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0">{{product.price}}</v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>{{product.description}}</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="orange" text>Share</v-btn>

                  <v-btn color="orange" text>Explore</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-row>
        </v-container>
      </v-card>
      <v-divider></v-divider>-->
      <v-container>
        <h1>Welcome</h1>
        <v-divider></v-divider>
        <v-row>
          <v-col
            v-for="product in this.products"
            :key="product.name"
            cols="10"
            xs="12"
            sm="10"
            md="7"
            lg="6"
            xl="4"
          >
            <v-card class="mx-auto">
              <div :v-for="product in products" :key="product.name">
                <v-img
                  class="white--text align-end"
                  max-height="300"
                  aspect-ratio="2"
                  :src="product.image"
                ></v-img>
                <v-card-title>{{product.name}}</v-card-title>

                <v-card-subtitle class="pb-0">{{product.price}} kr</v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>{{product.description}}</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="primary" text>Read more</v-btn>
                </v-card-actions>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Home"
})
export default class Home extends Vue {
  constructor() {
    super();
  }
  beforeCreate() {
    this.$store.dispatch("getProducts");
  }

  get products() {
    return this.$store.getters.products;
  }
}
</script>
