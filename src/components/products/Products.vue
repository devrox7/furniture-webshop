

<template>
  <div class="container-content">
    <div class="content-view">
      <!-- All products -->
      <v-card class="mx-auto" style="min-width:90%; margin: 50px">
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
            <v-col cols="12" xs="12" sm="10" md="10" lg="10" xl="12">
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
                      <td>{{ product.data.price }} kr</td>
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
                            <v-btn
                              @click.stop="EditProductDialog = true"
                              @click="openEditDialog(product.data, product.id)"
                              icon
                              color="primary"
                              v-on="on"
                            >
                              <v-icon>mdi-pencil-outline</v-icon>
                            </v-btn>
                          </template>
                          <span>Edit product</span>
                        </v-tooltip>

                        <v-tooltip right>
                          <template v-slot:activator="{ on }">
                            <v-btn
                              @click.stop="DeleteProductDialog = true"
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

      <!-- Edit product dialog -->
      <v-dialog v-model="EditProductDialog" width="500">
        <div class="container-content">
          <div class="content-view">
            <v-container style="padding:50px; text-align:center">
              <h1>Edit product</h1>

              <v-row class="d-flex justify-center">
                <v-col cols="12" xs="12" sm="10" md="10" lg="10" xl="10">
                  <v-text-field
                    name="name"
                    label="Product Name"
                    id="name"
                    v-model="editableProduct.name"
                    required
                  ></v-text-field>
                  <v-text-field
                    name="price"
                    label="Price"
                    id="price"
                    v-model="editableProduct.price"
                    required
                  ></v-text-field>
                  <v-text-field
                    name="description"
                    label="Description"
                    id="description"
                    v-model="editableProduct.description"
                    required
                  ></v-text-field>
                  <v-text-field
                    name="disount"
                    label="Disount"
                    id="disount"
                    v-model="editableProduct.discount"
                  ></v-text-field>
                  <v-text-field name="size" label="Size" id="size" v-model="editableProduct.size"></v-text-field>
                  <v-text-field
                    name="image"
                    label="Image"
                    id="image"
                    v-model="editableProduct.image"
                  ></v-text-field>

                  <v-autocomplete
                    :items="colors"
                    id="color"
                    item-text="name"
                    dense
                    chips
                    label="Colors"
                    multiple
                    return-object
                    v-model="editableProduct.color"
                  ></v-autocomplete>
                  <v-select
                    required
                    multiple
                    attach
                    chips
                    :items="rooms"
                    item-text="name"
                    label="Room Type"
                    color="purple darken-3"
                    return-object
                    v-model="editableProduct.roomsType"
                  ></v-select>

                  <v-btn
                    color="primary"
                    class="ma-2"
                    @click="editProduct(editableProduct, productId)"
                    @click.stop="EditProductDialog = false"
                    type="submit"
                  >Edit</v-btn>
                  <v-btn class="ma-2" @click.stop="EditProductDialog = false">Close</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </v-dialog>

      <!-- Delete product dialog -->
      <v-dialog v-model="DeleteProductDialog" width="500">
        <div class="container-content">
          <div class="content-view">
            <v-container>
              <v-row class="d-flex flex-column justify-center mb-6">
                <v-col>
                  <DeleteProduct :productId="this.productId" v-on:closeDialog="closeDialog2"></DeleteProduct>
                </v-col>
                <v-divider></v-divider>
                <v-col>
                  <div class="d-flex justify-center">
                    <v-btn class="ma-2" @click.stop="DeleteProductDialog = false">Close</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </v-dialog>
    </div>
  </div>
</template>




<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import { IProduct } from "../../models/product.model";
import CreateProduct from "./CreateProduct.vue";
import DeleteProduct from "./DeleteProduct.vue";
import { IProduct } from "../../models/product.model";

@Component({
  name: "Products",

  components: {
    CreateProduct,
    DeleteProduct
  }
})
export default class Products extends Vue {
  loading = false;

  editableProduct: IProduct = new IProduct();
  productId = "";

  EditProductDialog = false;
  DeleteProductDialog = false;

  colors = [
    "White",
    "Black",
    "Burgundy",
    "Green",
    "Yellow",
    "Purple",
    "Navy blue",
    "Red",
    "Orange",
    "Brown",
    "Bej"
  ];

  constructor() {
    super();
  }

  beforeCreate() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getRoomsType");
  }

  deleteProduct(id) {
    this.productId = id;
  }

  openEditDialog(product: IProduct, productID: string) {
    // debugger;
    this.productId = productID;
    this.editableProduct = product;
  }
  editProduct(product, productID) {
    this.$store.dispatch("updateProduct", { product, productID });
  }

  closeDialog2(value) {
    this.DeleteProductDialog = value;
  }

  get products() {
    return this.$store.getters.products;
  }

  get rooms() {
    return this.$store.getters.roomsType;
  }

  // get formIsValid() {
  //   return (
  //     this.editableProduct.name !== "" &&
  //     this.editableProduct.price !== null &&
  //     this.editableProduct.description !== "" &&
  //     this.editableProduct.image !== "" &&
  //     this.editableProduct.roomsType !== ""
  //   );
  // }

  // get loading() {
  //   return this.$store.getters.loading;
  // }
}
</script>


<style scoped>
.v-toolbar__content {
  max-height: 64px !important;
}

.container {
  background-color: white !important;
  color: #535b86 !important;
}

.v-data-table td {
  min-width: 120px;
}
</style>