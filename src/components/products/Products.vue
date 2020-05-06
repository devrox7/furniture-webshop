<template>
<v-card>
  <v-row justify="end">
      <v-col>
          <h1>Products</h1>
      </v-col>

      <v-col>
        <v-btn
            color="primary"
            class="ma-2"
            dark
            @click="createProductDialog = true"
          >Create
        </v-btn>
      </v-col>


      <!-- <v-dialog
          v-model="createProductDialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
          scrollable
      >
      </v-dialog> -->
        

  </v-row>
</v-card>


</template>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {db} from '../../main';
import CreateProduct from './CreateProduct.vue';


@Component({
    name: 'Products',

    components: {
    CreateProduct
  }
})
export default class Products extends Vue {
    createProductDialog = false;


    allProducts = [];

    constructor(){
        super();

        this.getProducts();

    }

    getProducts(){
        db.collection('Products').get().then(products=>{
                products.forEach(product=> {
                    this.allProducts.push(product);
                    console.log(this.allProducts);
                    console.log('prductsss');
                });
            }
        ).catch(function(error: Error) {
        console.log("Error getting document:", error)
        });
    }



}
</script>

<style>
.v-toolbar__content
{
    max-height: 64px !important;
}
</style>