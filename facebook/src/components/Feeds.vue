<template>
  <v-content>
    <div id="dropDown">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="cyan darken-2" dark v-on="on">See By Categories</v-btn>
        </template>
        <v-list>
          <v-list-tile v-for="(item, index) in getFeedData" :key="index" @click>
            <v-list-tile-title v-on="on" v-on:click="showByCategory(item.type)">{{ item.type }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>
    <div v-for="feed in feeds" v-if>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar class="cyan lighten-3">{{postedUser(feed.userId).name}}</v-toolbar>
              <v-img :src="feed.image" aspect-ratio="1.75"></v-img>
              <v-card-text>{{ feed.description }}</v-card-text>
              <v-card-actions></v-card-actions>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat icon color="blue lighten-2">
                  <v-icon large>thumb_up</v-icon>
                </v-btn>
                <v-btn flat color="orange">
                  <v-icon large>chat</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    // feeds: [],
    tile: true,
    name: "",
    userData: [],
    id: "",
    postedUserObj: {},
    type: ""
  }),
  created() {
    this.$store.dispatch("loadData");
    // this.feeds = this.$store.getters.getFeeds.feeds;
  },
  computed: {
    feeds() {
      // if(this.type && this.type!== "All"){
      //   return this.$store.getters.getFeeds.feeds.filter(f=> f.type === this.type);
      // }else{
      return this.$store.getters.getFeeds.feeds;
      // }
    },
    getData() {
      this.userData = this.$store.getters.userLogin.users;
      console.log(this.userData);
      console.log(this.type, "type in computed");
      this.name = localStorage.getItem("name");
      console.log(this.name, "name of loggin user in feeds");
      return this.$store.getters.userLogin;
    },
    getFeedData() {
      console.log(this.feeds);
      this.$store.getters.getspecificUserID;
      return this.$store.getters.getFeeds.feeds;
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
    },
    showByCategory(type) {
      this.type = type;
      let array = [];
      array = this.$store.getters.getFeeds.feeds;
     var cat = array.map(function(obj) { return obj.type});
cat = cat.filter(function(v,i) { return cat.indexOf(v) == i; });

console.log(cat)
        // console.log(array);
    }
  }
};
</script>

<style>
</style>
