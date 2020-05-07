<template>
<v-container>
<v-card>
  <div class="home">
    <h1>Welcome</h1>
  </div>
</v-card>
</v-container>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: "Home"
})
export default class Home extends Vue {

}
</script>
