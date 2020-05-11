<template>
  <div class="container-content ma-5">
    <div class="content-view">
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
              <div :v-for="product in products" :key="product.id">
                <v-img
                  class="white--text align-end"
                  max-height="300"
                  aspect-ratio="2"
                  :src="product.data.image"
                ></v-img>
                <v-card-title>{{product.data.name}}</v-card-title>

                <v-card-subtitle class="pb-0">{{product.data.price}} kr</v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>{{product.data.description}}</div>
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
