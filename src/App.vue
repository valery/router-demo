<template>
  <Header />
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <HelloWorld msg="Bienvenue dans la demo du router pour vue.js 3" />
  <p>Nécessite l'installation de <a href="https://next.router.vuejs.org/">vue-router v4</a><br />
  <code>npm install vue-router@4</code></p>
  <!-- affichage des composants définis dans le router -->
  <router-view></router-view>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Header
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style-type: none;
}
</style>
