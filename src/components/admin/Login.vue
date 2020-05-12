<template>
  <div class="container-content">
    <div class="content-view">
      <v-card class="mx-auto" style="min-width:50%; margin: 50px">
        <v-container>
          <h1>Admin login</h1>
          <v-divider></v-divider>
          <v-row class="d-flex justify-center pa-10">
            <v-col cols="12" xs="12" sm="10" md="6" lg="4" xl="4">
              <app-alert v-if="error" @dismissed="onDismissed" :text="error.message"></app-alert>
              <v-form @submit.prevent="signIn()">
                <v-text-field v-model="email" label="Email" required></v-text-field>

                <v-text-field
                  v-model="password"
                  label="Password"
                  required
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
                ></v-text-field>

                <v-btn
                  class="mt-5"
                  type="submit"
                  depressed
                  color="primary"
                  :disabled="loading && !formIsValid"
                  :loading="loading"
                >
                  LOG IN
                  <span v-if="loading" class="custom-loader">
                    <v-icon light>cached</v-icon>
                  </span>
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </div>
</template>



<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
// import firebase from "firebase";
// import "firebase/firestore";

@Component({
  name: "login"
})
export default class Login extends Vue {
  email = "";
  password = "";

  show1 = false;

  get formIsValid() {
    return this.email !== "" && this.password !== "";
  }

  get user() {
    return this.$store.getters.user;
  }

  get error() {
    return this.$store.getters.error;
  }

  get loading() {
    return this.$store.getters.loading;
  }

  @Watch("user")
  userChanged(user) {
    if (user !== null && user !== undefined) {
      this.$router.push("/products");
    }
  }

  signIn() {
    this.$store.dispatch("signUserIn", {
      email: this.email,
      password: this.password
    });
  }

  onDismissed() {
    console.log("error");
    this.$store.dispatch("clearError");
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>