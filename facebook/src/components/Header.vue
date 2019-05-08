<template>
  <v-card>
    <v-toolbar color="cyan lighten-3" fixed app>
      <h1>Welcome</h1>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" v-on:keyup.enter="searchFunction(search)" single-line hide-details ></v-text-field>
      <v-spacer></v-spacer>
      <v-avatar size="50" color="grey lighten-4">
        <v-img :src="showLoggedInUser.dp"></v-img>
      </v-avatar>
      <h2>{{showLoggedInUser.name}} {{showLoggedInUser.lastName}}</h2>
      <v-spacer></v-spacer>
      <v-btn color="cyan darken-2" round:true dark @click="showLoggOut">Loggout</v-btn>
    </v-toolbar>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Do You Want To Loggout ?</v-card-title>
        <v-card-actions>
          <v-btn color="red darken-1" flat="flat" @click="loggOut">Yes</v-btn>
          <v-btn color="green darken-1" flat="flat" @click="dialog = false">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      search: "",
      name: "",
      dialog: false
    }),
    computed: {
      showLoggedInUser() {
        return this.$store.getters.getspecificUserID;
      }
    },
    methods: {
      showLoggOut() {
        this.dialog = true;
        console.log("called logout");
      },
      loggOut() {
        localStorage.removeItem("name");
        this.$router.push("./");
      },
      searchFunction(search) {
        console.log("searchFunction called", search);
        this.$store.dispatch("searchData", search);
      }
    }
  };
</script>

<style scoped>
  h2 {
    padding: 20px;
  }
</style>
