<template>
  <div id="app">
    <FetchDataComponent/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    // To help load JS faster in the browser
    FetchDataComponent: () => import('./components/FetchDataComponent.vue')
  }
}
</script>


<style src="../public/css/tailwind.css">

</style>