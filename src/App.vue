<template>
  <div id="app">
    <NavBar/>
    <Footer/>
    <!-- <Container/> -->
    <router-view/>

  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import Bulma from 'bulma';


export default {
  components: {
    NavBar,
    Footer
  },
};
</script>

