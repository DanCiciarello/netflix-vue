<template>
  <div id="app">

    <div class="cdAppContainer d-flex flex-column">

      <!-- Header -->
      <TheHeader />

      <!-- Main -->
      <TheMain />

      <!-- Footer -->
      <TheFooter />

    </div>

      
    </div>
</template>

<!-- ------------------------------------------------ -->

<script>
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import TheFooter from './components/TheFooter.vue';

// Export
export default {

  // Name
  name: 'App',

  // Components
  components: {
    TheHeader,
    TheMain,
    TheFooter
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
.cdAppContainer {
  height: 100vh;
}
</style>
