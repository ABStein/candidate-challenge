<template>
  <div class="md:flex bg-white rounded-lg p-6 candidate-container">
    <p class="error" v-if="error">{{ error }}</p>
    <img alt="loading..." class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" v-bind:src="candidate.photo">
    <div class="text-center md:text-left text-container">
      <h2 class="text-lg">{{ candidate.name }}</h2>
      <div class="text-gray-700">{{ candidate.email }}</div>
      <div class="text-gray-700">{{ candidate.birthday }}</div>
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

<style src="../../public/css/tailwind.css">

</style>