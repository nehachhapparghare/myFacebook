<template>
  <v-card>
    <v-toolbar color="blue lighten-3" fixed app>
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
    name: ""
  }),
  created() {
    console.log("cmp");
    this.name = localStorage.getItem("name");
    this.$store.dispatch("loggedInUser", this.name);
  }

  // computed: {
  //   logged() {
  //     console.log('cmp')
  //     this.name = localStorage.getItem("name");
  //     this.$store.dispatch("loggedInUser", this.name);
  //   }
  // }
};
</script>

<style>
</style>
