<template>
  <div id="app">
    <div class="container-fluid ">
      <nav class="navbar">
        <div class="navbar-brand">
          SCHEMA
        </div>
      </nav>
      <div class="row">
        <div class="col-4">
          <tables-sidebar></tables-sidebar>
        </div>
        <div class="col-8 main">
          <column-searchbar></column-searchbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Searchbar from './components/Searchbar'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'tables-sidebar': Sidebar,
    'column-searchbar': Searchbar
  }
}
</script>

<style>
html {height: 100%}
body {height: 100%}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.navbar {
  border-bottom: 1px solid #ccc
}

.sidebar {
  padding: 10px;
  border-right: 1px solid #ccc;
  height: calc(100vh - 110px);
  overflow-y: scroll;
}

.main {
  padding: 5px;
}

.container-fluid {
  padding: 0;
}

.row {
  height: 100%
}

.col-4 {
  height: 100%
}


</style>
