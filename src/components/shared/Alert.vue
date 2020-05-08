<template>
  <v-alert
    dense
    outlined
    type="error"
    error
    dismissible
    v-model="alert"
    @input="onClose"
    :value="true"
  >{{text}}</v-alert>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "Alert"
})
export default class Alert extends Vue {
  @Prop() text;

  onClose() {
    this.$emit("dismissed");
  }
}
</script>