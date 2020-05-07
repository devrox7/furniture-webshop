<template>
<v-container>
    <v-card>
<h1>create product</h1>
    </v-card>
</v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Products from "../products/Products.vue";
import {db} from '../../main';



@Component({
    components:{
        Products
    }
})
export default class HelloWorld extends Vue {
    createProductDialog ;

    roomsType: Array<string> = [];

    constructor(){
        super();

        this.getRoomTypes();

    }
    getRoomTypes(){
        db.collection('Room Type').get().then(rooms=>{
                rooms.forEach(room=> {
                    this.roomsType.push(room.id);
                    console.log(this.roomsType);
                    console.log('roooomssss');
                });
            }
        ).catch(function(error: Error) {
        console.log("Error getting document:", error)
        });
    }
}
</script>
