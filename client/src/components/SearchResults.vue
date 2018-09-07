<template>
  <div class="search-results " v-if="searchedResults">
    <h3>All tables with field {{searchTerm}}</h3>
    <table class="table table-striped table-sm">
      <thead>
        <th>Table Name</th>
      </thead>
      <tbody>
        <tr v-for="result in searchedResults">
          <td>{{result.table_name}}</td>
        </tr>
      </tbody>
    </table>
    <!-- <p v-for="result in searchedResults">
      {{result.table_name}}
    </p> -->
  </div>

</template>

<script>
 export default {
   props: ['searchedResults', 'searchTerm'],
   data: function() {
     return {
       searchResults: []
     }
   },
   methods: {

   }
 }
</script>

<style scoped>
  .search-results {
    width: 90%;
  }
<style>
