<template>
  <v-content>
    <v-container>
      <v-layout align-center justify-center column fill-height>
        <v-flex xs12 sm6 md4>
          <v-card>
            <!-- {{getData.users[0]}} -->
            <v-card-title>{{getFeedData}}</v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    data: []
  }),
  created() {
    this.$store.dispatch("checkData");
    this.$store.dispatch("loadData");
  },
  computed: {
    getData() {
      return this.$store.getters.userLogin;
    },
    getFeedData() {
      return this.$store.getters.getFeeds;
    }
  }
};
</script>

<style>
</style>
