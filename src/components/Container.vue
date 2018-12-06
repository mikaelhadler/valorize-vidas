<template>
<section class="hero is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="logo">
            <!-- <img src="../../public/" alt=""> -->
          </div>
          <div class="message">
            Pode ficar tranquilo que podemos
            te ajudar. Entre em contato com a gente
            da forma como preferir
          </div>
        </div>
        <div class="column">
          <div class="ajuda">
            <h1>Precisa de Ajuda</h1>
            <Card
              :title="'chat'"
              :icon="['fa', 'comments']"
              :bgColor="'#F38C18'"
              />
            <Card
              :title="'ligue 188'"
              :icon="['fa', 'comments']"
              :bgColor="'#F38C18'"
              />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</section>
</template>
<script>
import Card from '@/components/Card.vue'
export default {
  name: 'Container',
  components: {
    Card
  }
}
</script>
