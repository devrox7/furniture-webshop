<template>
  <v-container>
    <v-card>
      <h1>Login</h1>

      <v-form @submit.prevent="signIn()">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="email" label="Email" required></v-text-field>
            </v-col>
            <br />
            <v-col cols="12" md="4">
              <v-text-field
                v-model="password"
                label="Password"
                required
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>
            <br />

            <v-col cols="12" md="4">
              <div class="my-2">
                <v-btn
                  @click.prevent="signIn()"
                  :disabled="!formIsValid"
                  depressed
                  color="primary"
                >LOG IN</v-btn>
              </div>
            </v-col>

            <hr />
            <v-col>
              <p>
                email:
                <b>admin@admin.dk</b>
              </p>
              <p>
                password:
                <b>123456</b>
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import firebase from "firebase";
import "firebase/firestore";

@Component({
  name: "login"
})
export default class Login extends Vue {
  email = "admin@admin.dk";
  password = "123456";

  show1 = false;

  get formIsValid() {
    return this.email !== "" && this.password !== "";
  }

  get user() {
    return this.$store.getters.user;
  }

  @Watch("user")
  userChanged(user) {
    if (user !== null && user !== undefined) {
      console.log(user);
      console.log("1");
      this.$router.push("/products");
    }

    // if (user == null) {
    //   console.log(user);
    //   console.log("2");
    //   this.$router.replace("/");
    // }
  }

  signIn() {
    this.$store.dispatch("signUserIn", {
      email: this.email,
      password: this.password
    });
  }
}
</script>
