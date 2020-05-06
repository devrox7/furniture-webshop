<template>
<v-card>
        <h1>Login</h1>

<v-form >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"

            label="Email"
            required
          ></v-text-field>
        </v-col>
<br>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="password"
            label="Password"
            required
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
<br>

        <v-col
          cols="12"
          md="4"
        >
          <div class="my-2">
        <v-btn @click.prevent="signIn()" :disabled="!formIsValid" depressed color="primary">LOG IN</v-btn>
      </div>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase';
import "firebase/firestore";



@Component({
    name: 'login'
})
export default class HelloWorld extends Vue {
    email = "";
    password = "";

    show1 = false;

formIsValid(){
    return this.email !=="" && this.password !=="";
}

    signIn(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(res =>{
            const token: string = res.user.refreshToken;
            const userId: string = res.user.uid;

            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);

            this.$router.replace('/admin-panel');
        })
        .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        if(errorCode === "auth/wrong-password"){
            alert("Wrong password!");
        }else{
            alert(errorMessage);
        }

        console.log(error);
        });
    }

    // signOut(){}
}
</script>
