<template>
  <v-app>
    <app-header v-if="isAuthenticated"></app-header>

    <router-view></router-view>

    <app-footer v-if="isAuthenticated"></app-footer>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    "app-header": Header,
    "app-footer": Footer
  },
  data: () => ({
    isAuthenticated: false
  }),
  created() {
    console.log(this.$route);
    if (this.$route.name == "feeds") {
      this.isAuthenticated = true;
    }
    this.$store.dispatch("checkData");
    this.$store.dispatch("loadData");
  }
};
</script>

<style>
</style>
