<template>
  <v-content>
    <v-container fluid fill-height>
      <v-btn color="teal darken-1" dark id="goBack" v-on:click="goBackToFeed">
        <v-icon dark left>arrow_back</v-icon>Back
      </v-btn>
      <v-layout align-center justify-center>
        <v-flex xs12 sm6>
          <v-card class="elevation-12 ma-4">
            <v-toolbar class="teal lighten-3">
              <v-avatar size="50" color="grey lighten-4">
                <v-img :src="postedUser(getSingleFeed.userId).dp"></v-img>
              </v-avatar>
              <h1 class="ml-4">{{postedUser(getSingleFeed.userId).name}}</h1>
              <h1 class="ml-2">{{postedUser(getSingleFeed.userId).lastName}}</h1>
              <v-spacer></v-spacer>
              <h1>{{getSingleFeed.type}}</h1>
            </v-toolbar>
            <v-img :src="getSingleFeed.image" aspect-ratio="2"></v-img>
            <v-card-text>
              <h1>{{getSingleFeed.title}}</h1>
              <h3 class="blue-grey--text text--darken--4">{{getSingleFeed.description}}</h3>
            </v-card-text>
            <v-card-actions>
              <v-btn flat icon color="blue lighten-2">
                <v-icon medium>favorite</v-icon>
              </v-btn>
              <h3 class="blue--text text--lighten-2">Liked by {{getSingleFeed.like}}</h3>
              <v-btn flat color="teal lighten-2">
                <v-icon medium>chat</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data: () => ({
      singleFeed: {}
    }),
    created() {
      if (!this.getSingleFeed) {
        this.$router.push("/feeds");
      }
    },
    computed: {
      getSingleFeed() {
        this.singleFeed = this.$store.getters.displaySelectedFeed;
        return this.$store.getters.displaySelectedFeed;
      }
    },
    methods: {
      postedUser(userID) {
        let userData = [];
        userData = this.$store.getters.userLogin.users;
        console.log(userData, "userData", userID);
        let userHeader = userData.find(a => {
          return a.id === userID;
        });
        console.log(userHeader);
        return userHeader;
      },

      goBackToFeed() {
        this.$router.push("./feeds");
      }
    }
  };
</script>

<style scoped>
  #goBack {
    bottom: 350px;
    position: relative;
  }
</style>
