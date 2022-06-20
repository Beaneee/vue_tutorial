<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/data_binding/string">String</router-link> |
    <router-link to="/data_binding/html">Html</router-link> |
    <router-link to="/data_binding/input">Input</router-link> |
    <router-link to="/data_binding/select">Select</router-link> |
    <router-link to="/data_binding/check">Check</router-link> |
    <router-link to="/data_binding/radio">Radio</router-link> |
    <router-link to="/data_binding/attribute">Attribute</router-link> |
    <router-link to="/data_binding/list">List</router-link> |
    <router-link to="/data_binding/class">Class</router-link> |
    <router-link to="/data_binding/style">Style</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
