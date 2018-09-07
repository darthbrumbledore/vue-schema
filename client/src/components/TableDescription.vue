<template>
  <div v-if="tableName">
    <h3 >Description of {{tableName}}</h3>
    <table class="table table-striped table-sm">
      <thead>
        <th>Field</th>
        <th>Type</th>
        <th>Null</th>
        <th>Key</th>
        <th>Default</th>
        <th>Extra</th>
      </thead>
      <tbody>
        <tr v-for="column in tableDescription">
          <td>{{column.Field}}</td>
          <td>{{column.Type}}</td>
          <td>{{column.Null}}</td>
          <td>{{column.Key}}</td>
          <td>{{column.Default}}</td>
          <td>{{column.Extra}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  export default {
    props: ['tableDescription', 'tableName'],
    data: function() {
      return {

      }
    }
  }

</script>

<style scoped>
  h3 {
    color: #757575
  }
</style>
