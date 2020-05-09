<template>
  <v-card class="mx-auto" style="min-width:50%; margin: 50px">
    <v-container>
      <h1>Create Product</h1>
      <v-divider></v-divider>
      <v-row class="ma-2">
        <v-col cols="12" sm="6" md="6" lg="4" xl="4">
          <v-form @submit.prevent="onCreateProduct">
            <v-text-field name="name" label="Product Name" id="name" v-model="name" required></v-text-field>
            <v-text-field name="price" label="Price" id="price" v-model="price" required></v-text-field>
            <v-text-field
              name="description"
              label="Description"
              id="description"
              v-model="description"
              required
            ></v-text-field>
            <v-text-field name="disount" label="Disount" id="disount" v-model="discount"></v-text-field>
            <v-text-field name="size" label="Size" id="size" v-model="size"></v-text-field>
            <v-text-field name="image" label="Image" id="image" v-model="image"></v-text-field>
            <!-- <v-file-input name="image" label="Image" id="image" required></v-file-input> -->

            <v-autocomplete
              :items="colors"
              id="color"
              item-text="name"
              dense
              chips
              label="Colors"
              multiple
              return-object
              v-model="color"
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
              v-model="roomsType"
            ></v-select>

            <v-btn :disabled="!formIsValid" color="primary" class="ma-2" type="submit">Create</v-btn>
          </v-form>
        </v-col>

        <v-col class="d-flex justify-center">
          <img :src="image" height="400px" />
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-btn to="/products" text small color="primary" class="mt-4">
        <v-icon>mdi-arrow-left-bold-circle-outline</v-icon>&nbsp; &nbsp;back to products
      </v-btn>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Products from "../products/Products.vue";

// import { db } from "../../main";

@Component({
  components: {
    Products
  }
})
export default class CreateProduct extends Vue {
  name = "";
  price = null;
  description = "";
  discount = null;
  size = "";
  color = "";
  roomsType = "";
  image = "";

  rooms = [
    { name: "Living Room" },
    { name: "Bedroom" },
    { name: "Kitchen" },
    { name: "Dinning Room" },
    { name: "Office" },
    { name: "Bathroom" }
  ];

  colors = [
    { name: "White" },
    { name: "Black" },
    { name: "Burgundy" },
    { name: "Green" },
    { name: "Yellow" },
    { name: "Purple" },
    { name: "Navy blue" },
    { name: "Red" },
    { name: "Orange" },
    { name: "Brown" },
    { name: "Bej" }
  ];

  // categories: [
  //         { name: "Continental Bed" },
  //         { name: "Wardrobe" },
  //         { name: "Dresser" },
  //         { name: "Guest Bed" },
  //         { name: "Bedside Table" },
  //         { name: "Bed Frame" },
  //         { name: "Mirror" }
  // ]
  constructor() {
    super();
  }

  get formIsValid() {
    return (
      this.name !== "" &&
      this.price !== null &&
      this.description !== "" &&
      this.image !== "" &&
      this.roomsType !== ""
    );
  }

  onCreateProduct() {
    debugger;

    if (!this.formIsValid) {
      return;
    }
    const product = {
      name: this.name,
      price: this.price,
      description: this.description,
      discount: this.discount,
      size: this.size,
      color: this.color,
      image: this.image,
      roomsType: this.roomsType
    };
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

