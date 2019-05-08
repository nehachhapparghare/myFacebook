<template>
  <v-content>
    <v-container>
      <v-layout class="mr-4">
        <div>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                round:true
                id="dropDown"
                color="cyan accent-2"
                v-on="on"
                fixed
                v-on:click="showByCategory()"
              >See By Categories</v-btn>
            </template>
            <v-list>
              <v-list-tile v-for="type in types" @click>
                <v-list-tile-title v-on="on" v-on:click="selectType(type)">{{ type }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>
      </v-layout>

      <v-container class="ma-4">
        <v-layout align-center row wrap>
          <v-flex xs12 md6 v-for="feed in feeds">
            <v-card class="elevation-12 ma-4" height="700px">
              <v-toolbar class="cyan lighten-3">
                <v-avatar size="40" color="grey lighten-4">
                  <v-img :src="postedUser(feed.userId).dp"></v-img>
                </v-avatar>
                <h3>{{postedUser(feed.userId).name}}</h3>
              </v-toolbar>
              <v-img :src="feed.image" aspect-ratio="1.75"></v-img>
              <v-card-text>
                <h2>{{feed.title}}</h2>
              </v-card-text>
              <v-flex xs12>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat icon color="pink accent-2">
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn flat color="deep-orange accent-2">
                    <v-icon>chat</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data: () => ({
      tile: true,
      name: "",
      userData: [],
      id: "",
      postedUserObj: {},
      types: [],
      on: "",
      selectedType: "",
    }),
    created() {
      this.$store.dispatch("loadData");
    },
    computed: {
      feeds() {
        console.log(this.$store.getters.getFeeds, "feeeeds", this.selectedType);
        if (this.selectedType && this.selectedType !== "All") {
          return this.$store.getters.getFeeds.filter(
            f => f.type === this.selectedType
          );
        } else {
          console.log(this.$store.getters.getFeeds, "feeeeds");
          return this.$store.getters.getFeeds;
        }
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
        return this.$store.getters.getFeeds;
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
      showByCategory() {
        let array = [];
        array = this.$store.getters.getFeeds;
        var category = array.map(function(obj) {
          return obj.type;
        });
        category = category.filter(function(v, i) {
          return category.indexOf(v) == i;
        });
        this.types = category;
        this.types.unshift("All");
        console.log(this.types);
      },
      selectType(selectedType) {
        this.selectedType = selectedType;
        console.log(this.selectedType);
      }
    }
  };
</script>

<style scoped>
  #dropDown {
    z-index: 1;
  }
</style>
