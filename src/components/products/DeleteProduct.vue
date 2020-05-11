<template>
  <div class="text-center">
    <h4>Are you sure you want to delete this product?</h4>

    <v-btn
      color="error"
      class="ma-2 mt-7"
      @click.stop="dialog = false"
      @click="deleteProduct(productId)"
    >Delete</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class DeleteProduct extends Vue {
  @Prop() private productId: string;

  dialog = false;

  deleteProduct(id) {
    // debugger;
    this.$store.dispatch("deleteProduct", id);
    this.closeDialog(event);
  }

  get products() {
    return this.$store.getters.products;
  }

  closeDialog(event) {
    this.$emit("closeDialog", this.dialog);
  }
}
</script>


<style scoped>
.container {
  background-color: white !important;
  color: #535b86 !important;
}
h4 {
  font-family: "Poppins", sans-serif;
}
</style>