<template>
  <div id="app">
    <NavBar
      v-if="false"/>
      <Footer />
    <!-- <Container/> -->
    <router-view/>

  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';


export default {
  components: {
    NavBar,
    Footer
  },
};
</script>
