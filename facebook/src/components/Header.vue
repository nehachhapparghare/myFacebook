<template>
  <v-card>
    <v-toolbar color="cyan lighten-3" fixed app>
      <h1>Facebook</h1>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      <v-spacer></v-spacer>
      <v-flex v-on:click="showLoggOut">
        <v-responsive class="pt-4">
          <v-avatar size="50" color="grey lighten-4">
            <v-img :src="showLoggedInUser.dp"></v-img>
          </v-avatar>
        </v-responsive>
        <v-spacer></v-spacer>
        <h3>{{showLoggedInUser.name}} {{showLoggedInUser.lastName}}</h3>
      </v-flex>
      <!-- <v-btn v-on:click="loggOut">Loggout</v-btn> -->
    </v-toolbar>

    <v-dialog v-if="dialog" transition="dialog-bottom-transition" width="20%">
      <v-card>
        <v-card-title primary-title>
          <div>
            <h2>Do You Want To Loggout ?</h2>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" v-on:click="loggOut">Yes</v-btn>
          <v-spacer></v-spacer>
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
  created() {
    // this.name = localStorage.getItem("name");
    // console.log(this.$store.getters.getspecificUserID, "users in login page");
  },
  computed: {
    showLoggedInUser() {
      return this.$store.getters.getspecificUserID;
    }
  },
  methods: {
    showLoggOut() {
      this.dialog = true;
    },
    loggOut() {
      localStorage.removeItem("name");
      this.$router.push("./");
    }
  }
};
</script>

<style>
</style>
