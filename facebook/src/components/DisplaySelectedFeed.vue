<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm6>
          <v-card class="elevation-12 ma-4">
            <v-toolbar class="cyan lighten-3">
              <v-avatar size="50" color="grey lighten-4">
                <v-img :src="postedUser(getSingleFeed.userId).dp"></v-img>
              </v-avatar>
              <h1 class="ml-4 indigo--text text--accent-3">{{postedUser(getSingleFeed.userId).name}}</h1>
              <h1
                class="ml-2 indigo--text text--accent-3"
              >{{postedUser(getSingleFeed.userId).lastName}}</h1>
              <v-spacer></v-spacer>
              <h1 class="ml-2 indigo--text text--accent-3">{{getSingleFeed.type}}</h1>
            </v-toolbar>
            <v-img :src="getSingleFeed.image" aspect-ratio="2"></v-img>
            <v-card-text>
              <h1 class="pink--text text--accent-3">{{getSingleFeed.title}}</h1>
              <h3 class="blue-grey--text text--darken--4">{{getSingleFeed.description}}</h3>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat icon color="pink accent-2">
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn flat color="deep-orange accent-2">
                <v-icon>chat</v-icon>
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
      userData: [],
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
        this.userData = this.$store.getters.userLogin.users;
        console.log(this.userData, "userData", userID);
        let userHeader = this.userData.find(a => {
          return a.id === userID;
        });
        console.log(userHeader);
        return userHeader;
      }
    }
  };
</script>

<style scoped>
</style>
