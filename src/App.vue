<template>
  <div id="app">
    <Container/>
    <router-view/>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import Container from '@/components/Container.vue'
export default {
  components: {
    NavBar,
    Container
  }
}
</script>
