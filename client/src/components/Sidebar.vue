<template>
  <div class="sidebar">
    <h3>Jamf Pro Tables</h3>
    <hr>
    <div class="form-group">
      <input type="text" placeholder="filter tables..." v-model="searchQuery" @keyup="filterTables">
    </div>
    <table>
      <p v-for="table in filteredList">
        <a :href="table.Tables_in_jamfsoftware" @click.prevent="describeTable(table.Tables_in_jamfsoftware)">{{table.Tables_in_jamfsoftware}}</a>
      </p>
    </table>
  </div>
</template>

<script>
  import axios from 'axios';
  import {EventBus} from '../bus.js';
  import {ApiClient} from '../api-client.js'
  export default {
    data: function() {
      return{
        tables: [],
        clickedTable: '',
        searchQuery: '',
        filteredList: [],
        filterRequest: []
      }
    },
    methods: {
      getTables() {
        // axios.get('http://schema.dev.jamfsw.corp:3000/tables').then((response) => {
        //   this.tables = response.data
        // })
        ApiClient.get('/tables').then((response) => {
          this.tables = response.data
          this.filteredList = this.tables;
        })
      },
      describeTable(e) {
        console.log('clicked')
        // console.log(e.target.value)
        this.clickedTable = e;
        EventBus.$emit('tableToDescribe', this.clickedTable);
        console.log(`you clicked ${this.clickedTable}`)
      },
      filterTables() {
        console.log("this fires");
        console.log(this.filteredList)
        this.filteredList = this.tables.filter((item) => {
          return item.Tables_in_jamfsoftware.includes(this.searchQuery)
        })
      }
    },
    mounted() {
      this.getTables();
    }
  }
</script>

<style scoped>
.sidebar {
  padding: 10px;
  border-right: 1px solid #ccc;
  height: calc(100vh);
  overflow-y: scroll;
}
  a {
    color: #4c6284;
    font-weight: bold
  }

  input {
    width: 95%;
    padding: 5px;
  }
</style>
