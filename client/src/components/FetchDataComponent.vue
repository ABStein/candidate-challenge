<template>
  <div class="container">
    <h1>Candidate Data</h1>
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="candidate-container">
      <div class="candidate">
        <ul> Candidate name: {{ candidate.name }} </ul>
        <ul> Candidate email: {{ candidate.email }} </ul>
        <img v-bind:src="candidate.photo">
        <ul> Candidate Birthday: {{ candidate.birthday }} </ul>
      </div>
    </div>
  </div>
</template>

<script>
import FetchDataService from '../fetchDataService';
export default {
  name: 'FetchDataComponent',
  data() {
    return {
      candidate: {},
      error: '',
    }
  },
  async created() {
    try {
      this.candidate = await FetchDataService.fetchData();
    } catch (err) {
      this.error = err.message;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
