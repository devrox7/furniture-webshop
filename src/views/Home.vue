<template>
  <div class="container-content ma-5">
    <div class="content-view">
      <v-container>
        <h1>Welcome</h1>
        <p>Take a look at our products variation</p>
        <v-divider></v-divider>
        <v-row class="d-flex justify-center">
          <v-col
            v-for="product in this.products"
            :key="product.name"
            cols="12"
            xs="12"
            sm="10"
            md="9"
            lg="6"
            xl="4"
          >
            <v-card class="mx-auto pt-10" min-height="650" max-height="650">
              <div :v-for="product in products" :key="product.id">
                <v-chip v-if="product.data.discount" class="ma-2" color="orange" text-color="white">
                  OFFER
                  <v-icon right>mdi-star</v-icon>
                </v-chip>
                <v-img
                  class="white--text align-end"
                  max-height="300"
                  aspect-ratio="2"
                  :src="product.data.image"
                ></v-img>
                <v-card-title>{{product.data.name}}</v-card-title>
                <v-card-subtitle
                  class="pb-0 pt-2"
                  v-bind:class="(product.data.discount)?'lineover':'lineover-none'"
                >{{product.data.price}} kr</v-card-subtitle>
                <v-card-subtitle
                  v-if="product.data.discount"
                  class="pb-34 new-price"
                >{{ getDiscountPrice(product.data.price, product.data.discount)}} kr</v-card-subtitle>

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

  getDiscountPrice(price, discount) {
    const newPrice = price - (discount / 100) * price;
    return newPrice;
  }
}
</script>

<style scoped>
.lineover {
  text-decoration: line-through;
}

.lineover-none {
  text-decoration: none;
}

.new-price {
  font-size: 18px !important;
  font-weight: bold !important;
  color: orange !important;
  letter-spacing: 1px !important;
}
</style>
