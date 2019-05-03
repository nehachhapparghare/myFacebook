<template>
  <v-card>
    <v-toolbar color="cyan lighten-3" fixed app>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    search: "",
    name: "",
    data: []
  }),
  created() {
    this.$store.dispatch("checkData");
    this.name = localStorage.getItem("name");
    console.log(this.$store.getters.userLogin);
  },
  computed: {
    showLoggedInUser() {
      this.data = this.$store.getters.userLogin;
      return this.$store.getters.userLogin;
    },
    showLogged() {
      return this.$store.getters.specificUser;
    }
  },

};
</script>

<style>
</style>
