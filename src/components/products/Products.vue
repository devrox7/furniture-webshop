

<template>
  <div class="container-content">
    <div class="content-view">
      <!-- All products -->
      <v-card class="mx-auto" style="min-width:95%; margin: 50px">
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
              <v-simple-table class="table responsive">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Name</th>
                      <th class="text-left">Price</th>
                      <th class="text-left">Description</th>
                      <th class="text-left">Image</th>
                      <th class="text-left">Discount</th>
                      <th class="text-left">Size</th>
                      <!-- <th class="text-left">Color</th>
                      <th class="text-left">Room Type</th>-->
                      <th>Tools</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in products" :key="product.name">
                      <td>{{ product.data.name }}</td>
                      <td>{{ product.data.price }}</td>
                      <td>{{ product.data.description }}</td>
                      <td>{{ product.data.image }}</td>
                      <td>
                        <div v-if="!product.data.discount">
                          <i>None</i>
                        </div>
                        {{ product.data.discount }}
                      </td>
                      <td>{{ product.data.size }}</td>

                      <td>
                        <v-tooltip left>
                          <template v-slot:activator="{ on }">
                            <v-btn icon color="primary" v-on="on">
                              <v-icon>mdi-pencil-outline</v-icon>
                            </v-btn>
                          </template>
                          <span>Edit product</span>
                        </v-tooltip>

                        <v-tooltip right>
                          <template v-slot:activator="{ on }">
                            <v-btn
                              @click="deleteProduct(product.id)"
                              icon
                              color="primary"
                              v-on="on"
                            >
                              <v-icon>mdi-delete-outline</v-icon>
                            </v-btn>
                          </template>
                          <span>Delete product</span>
                        </v-tooltip>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <!-- <div :v-if="loading == true">
              <v-progress-circular  :size="50" : :width="10" color="primary" indeterminate></v-progress-circular>
              </div>-->
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <!-- Delete product dialog -->
      <!-- <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>

          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="deleteProduct(product.id)"
              @click.stop=" dialog = false"
            >I accept</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>-->
    </div>
  </div>
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
  loading = false;
  // dialog = false;
  constructor() {
    super();
  }

  beforeCreate() {
    this.$store.dispatch("getProducts");
  }

  deleteProduct(id) {
    this.$store.dispatch("deleteProduct", id);
  }

  get products() {
    return this.$store.getters.products;
  }

  // get loading() {
  //   return this.$store.getters.loading;
  // }
}
</script>


<style scoped>
.v-toolbar__content {
  max-height: 64px !important;
}
</style>