<template>
  <div class="container-content">
    <div class="content-view">
      <v-card class="mx-auto" style="min-width:50%; margin: 50px">
        <v-container>
          <h1>Create Product</h1>
          <v-divider></v-divider>
          <v-row class="ma-2">
            <v-col cols="12" sm="6" md="6" lg="6" xl="6">
              <v-form @submit.prevent="onCreateProduct">
                <v-text-field
                  name="name"
                  label="Product Name"
                  id="name"
                  v-model="product.name"
                  required
                ></v-text-field>
                <v-text-field
                  type="number"
                  name="price"
                  label="Price"
                  id="price"
                  v-model="product.price"
                  required
                ></v-text-field>
                <v-textarea
                  name="description"
                  label="Description"
                  id="description"
                  v-model="product.description"
                  required
                ></v-textarea>
                <v-text-field
                  append-icon="%"
                  type="number"
                  name="disount"
                  label="Discount"
                  id="disount"
                  v-model="product.discount"
                ></v-text-field>
                <v-text-field name="size" label="Size" id="size" v-model="product.size"></v-text-field>
                <v-text-field name="image" label="Image" id="image" v-model="product.image"  persistent-hint hint="Image field requires a link which contains a picture."></v-text-field>
                
                <!-- <v-file-input
                  name="image"
                  label="Image"
                  id="image"
                  ref="file-input"
                  accept="image/*"
                  v-model="product.image"
                  required
                ></v-file-input>-->

                <v-autocomplete
                  :items="colors"
                  id="color"
                  item-text="name"
                  dense
                  chips
                  label="Colors"
                  multiple
                  return-object
                  v-model="product.color"
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
                  v-model="product.roomsType"
                ></v-select>

                <v-btn :disabled="!formIsValid" color="primary" class="ma-2" type="submit">Create</v-btn>
              </v-form>
            </v-col>

            <v-col class="d-flex justify-center">
              <img :src="product.image" height="400px" />
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-btn to="/products" text small color="primary" class="mt-4">
            <v-icon>mdi-arrow-left-bold-circle-outline</v-icon>&nbsp; &nbsp;back to products
          </v-btn>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Products from "../products/Products.vue";
import { IProduct } from "../../models/product.model";

// import { db } from "../../main";

@Component({
  components: {
    Products
  }
})
export default class CreateProduct extends Vue {
  product: IProduct = new IProduct();

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
    this.$store.dispatch("getRoomsType");
  }

  get formIsValid() {
    return (
      this.product.name !== "" &&
      this.product.price !== null &&
      this.product.description !== "" &&
      this.product.image !== "" &&
      this.product.roomsType !== []
    );
  }

  get rooms() {
    return this.$store.getters.roomsType;
  }

  onCreateProduct() {
    // debugger;

    if (!this.formIsValid) {
      return;
    }
    if (!this.product.image) {
      return;
    }
    // debugger;
    const product = this.product;
    this.$store.dispatch("createProduct", product);
    this.$router.push("/products");
  }
}
</script>

<style scoped>
.v-list-item__content {
  color: #535b86 !important;
}

.required label::after {
  content: "*";
}
</style>

