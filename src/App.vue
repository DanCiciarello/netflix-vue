<template>
  <div id="app">

      <!-- Header -->
      <TheHeader />

      <!-- Main -->
      <TheMain />
      
    </div>
</template>

<!-- ------------------------------------------------ -->

<script>
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';

// Export
export default {

  // Name
  name: 'App',

  // Components
  components: {
    TheHeader,
    TheMain
},

  // Data
  data() {
    return {

    }
  },

}
</script>

<!-- ------------------------------------------------ -->

<style lang="scss">

</style>
