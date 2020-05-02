<template>
<div>
<v-navigation-drawer v-model="drawer"  app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar  >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title> <div>
<img alt="Vue logo" src='../assets/images/logo.png' style='max-width:70px'>
</div></v-toolbar-title>
   
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/">Home</v-tab>
          <v-tab  to="/about">About</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    </div>
</template>

<script>
export default{
  data: () => ({
    drawer: false
  })
}
</script>

<style lang="scss">

</style>