<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm6 md4>
        <v-card class="elevation-12">
          <v-toolbar class="cyan lighten-3">
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>{{getFeedData}}</v-card-text>
          <v-card-actions></v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    feeds: {},
    name: "",
    userData: [],
    id: ""
  }),
  created() {
    this.$store.dispatch("loadData");
  },
  computed: {
    getData() {
      this.userData = this.$store.getters.userLogin;
      console.log(this.userData);
      this.name = localStorage.getItem("name");
      console.log(this.name, "name of loggin user in feeds");
      return this.$store.getters.userLogin;
    },
    getFeedData() {
      this.feeds = this.$store.getters.getFeeds.feeds;
      console.log(this.feeds);
      this.$store.getters.getspecificUserID;
      return this.$store.getters.getFeeds.feeds;
    }
  }
};
</script>

<style>
</style>
