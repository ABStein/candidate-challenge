<template>
  <div class="bg bg-white rounded-lg p-6 candidate-container">
    <p class="error" v-if="error">{{ error }}</p>
    <div>
      <img class="rounded-full mx-auto w-20 h-20" v-bind:src="candidate.photo">
    </div>
    <div class="text-lg text-center">
      {{ candidate.name }} 
    </div>
    <div class="text-gray-600 text-center">
      {{ candidate.email }}
      <br>
      {{ candidate.birthday }}
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
<style>

</style>
