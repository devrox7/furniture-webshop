<template>
  <v-form>
    <v-card class="mx-auto" style="min-width:50%; margin: 50px">
      <v-container>
        <h1>Create Product</h1>
        <v-divider></v-divider>
        <v-row class="ma-2">
          <v-col cols="12" sm="6" md="6" lg="4" xl="4">
            <v-text-field name="name" label="Product Name" id="name" required></v-text-field>

            <v-text-field name="name" label="Product Name" id="name" required></v-text-field>

            <v-select v-model="items" :items="items" attach chips label="Room Type" multiple></v-select>

            <v-btn to="/create-product" color="primary" class="ma-2">Create</v-btn>
          </v-col>

          <v-col class="d-flex" cols="12" sm="6">
            <v-select label="Filled style">
              <option v-for="item in items" :key="item">{{item}}</option>
            </v-select>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-btn to="/products" text small color="primary" class="mt-4">
          <v-icon>mdi-arrow-left-bold-circle-outline</v-icon>&nbsp; &nbsp;back to products
        </v-btn>
      </v-container>
    </v-card>
  </v-form>
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
export default class HelloWorld extends Vue {
  // categories: Array<string> = ["Foo", "Bar", "Fizz", "Buzz"];
  // rooms: Array<string> = ["Foo", "Bar", "Fizz", "Buzz"];
  items;
  // categories = [
  //   { name: "a" },
  //   { name: "b" },
  //   { name: "c" },
  //   { name: "d" },
  //   { name: "e" },
  //   { name: "f" }
  // ];

  constructor() {
    super();
    this.items = ["Foo", "Bar", "Fizz", "Buzz"];

    // this.getRoomTypes();
  }
  //   getRoomTypes() {
  //     db.collection("Room Type")
  //       .get()
  //       .then(rooms => {
  //         rooms.forEach(room => {
  //           this.roomsType.push(room.id);
  //           console.log(this.roomsType);
  //           console.log("roooomssss");
  //         });
  //       })
  //       .catch(function(error: Error) {
  //         console.log("Error getting document:", error);
  //       });
  //   }
}
</script>
