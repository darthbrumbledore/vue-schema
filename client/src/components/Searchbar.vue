<template>
  <div class="searchbar">
    <div class="form-group">
      <div class="inner-addon right-addon">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input class="form-control-lg" v-model="searchTerm" type="text" placeholder="search database column names..." @keyup="getColumns">
      </div>
      <br><br>

      <div class="main-content">
        <component :searchTerm="searchTerm" :searchedResults="searchedResults" :is="compToRender"></component>
        <component :tableName="tableName" :tableDescription="tableDescription" :is="compToRender"></component>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import SearchResults from './SearchResults'
  import TableDescription from './TableDescription'
  import {EventBus} from '../bus.js';
  import {ApiClient} from '../api-client.js'
  export default {

    data: function() {
      return {
        searchTerm: '',
        searchedResults: [],
        compToRender: '',
        tableDescription: [],
        tableName: ''
      }
    },
    components: {
      'search-results': SearchResults,
      'table-description': TableDescription
    },
    methods: {
      getColumns() {
        console.log('searched')
        // axios.get(`http://schema.dev.jamfsw.corp:3000/tables/${this.searchTerm}`).then((response) => {
        //   this.searchedResults = response.data
        //   this.compToRender = 'search-results'
        //   console.log(response.data)
        // })
        ApiClient.get(`/tables/${this.searchTerm}`).then((response) => {
          this.searchedResults = response.data
          this.compToRender = 'search-results'
          console.log(response.data)
        })
      },

    },
    computed: {

    },
    mounted() {
      EventBus.$on('tableToDescribe', (table) => {
        ApiClient.get(`/describe-table/${table}`).then((response) => {
          this.tableDescription = response.data;
          this.tableName = table;
          this.compToRender = 'table-description'
          console.log(response.data)
        })

        })
    }
    }
</script>

<style scoped>
  input {
    margin: 0 auto;
    width: 97%
  }

  .inner-addon {
    position: relative;
  }

  .inner-addon .fa {
    position: absolute;
    padding: 10px;
    pointer-events: none
  }

  .right-addon .fa {
    right: 25px;
    top: 3px;
    color: #ccc;
    font-size: 1.3em
  }

  .right-addon input {
    padding-right: 30px;
  }

  .main-content {
    height: calc(100vh - 110px);
    overflow-y: scroll;
  }

</style>
