<template>
<v-card>
<h1>hello</h1>
</v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>
