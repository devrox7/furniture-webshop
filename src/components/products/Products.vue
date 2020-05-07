<template>
<v-container>
<v-card style="width: 100%;"> 
  <v-row justify="end">
      <v-col>
          <h1>Products</h1>
      </v-col>

      <v-col class='d-flex justify-end'>
        <v-btn
            color="primary"
            class="ma-2 "
          >Create
        </v-btn>
      </v-col>
  </v-row>
  <v-divider></v-divider>
<br>
<!-- <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table> -->

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
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
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

        

</v-card>

</v-container>
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
  headers = [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ]
desserts =[
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ]

    allProducts = [];

    constructor(){
        super();

        this.getProducts();
        this.desserts;

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