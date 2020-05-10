

<template>
  <v-card class="mx-auto" style="min-width:70%; margin: 50px">
    <v-container>
      <v-row justify="end">
        <v-col>
          <h1>Products</h1>
        </v-col>

        <v-col class="d-flex justify-end">
          <v-btn to="/create-product" color="primary" class="ma-2">Create</v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Calories</th>
                  <th>Tools</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products" :key="product.name">
                  <td>{{ product.name }}</td>
                  <td>{{ product.price }}</td>
                  <td>
                    <v-btn icon color="primary">
                      <v-icon>mdi-pencil-outline</v-icon>
                    </v-btn>

                    <v-btn icon color="primary">
                      <v-icon>mdi-delete-outline</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import CreateProduct from "./CreateProduct.vue";

@Component({
  name: "Products",

  components: {
    CreateProduct
  }
})
export default class Products extends Vue {
  // allProducts = this.products;

  constructor() {
    super();

  }

get products(){
  return this.$store.getters.products;
}

  getProducts() {
     this.$store.dispatch('getProducts');
  }

}
</script>

<style scoped>
.v-toolbar__content {
  max-height: 64px !important;
}
</style>