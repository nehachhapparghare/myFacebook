<template>
  <v-content>
    <v-flex xs12>
      <v-card class="elevation-4">
        <v-card-title class="teal lighten-5">
          <h2>Activity Log</h2>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-flex v-for="activeFeed in activeFeeds" :key="activeFeed.id">
            <v-layout row>
              <h3 class="font-weight-bold">{{loggedInUser.name}} Likes {{activeFeed.type}} post.</h3>
              <v-btn class="icon" flat icon>
                <v-icon medium>edit</v-icon>
              </v-btn>
            </v-layout>
            <v-layout row wrap justify-center>
              <v-avatar size="200" color="grey lighten-4" tile>
                <v-img :src="activeFeed.image"></v-img>
              </v-avatar>
            </v-layout>
            <v-layout justify-center>
              <p class="font-weight-medium blue-grey--text text--darken--4">{{activeFeed.title}}</p>
            </v-layout>
            <v-divider></v-divider>
          </v-flex>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-content>
</template>

<script>
  export default {
    data: () => ({}),
    computed: {
      activeFeeds() {
        console.log(
          this.$store.getters.getActiveFeeds,
          "ative feeds in activity log"
        );
        return this.$store.getters.getActiveFeeds;
      },
      loggedInUser() {
        return this.$store.getters.getspecificUserID;
      }
    }
  };
</script>

<style scoped>
  .icon {
    position: relative;
    left: 83%;
  }
</style>
