<template>
<section class="hero is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <div class="logo">
            <img src="../assets/logo-horizontal.svg" alt="">
          </div>
        </div>
        <div class="column is-6">
            <div class="message">
            Pode ficar tranquilo que podemos
            te ajudar. Entre em contato com a gente
            da forma como preferir
          </div>
        </div>

      </div>
      <div class="columns">
        <div class="column is-6">
          <div class="ajuda">
            <h1>Precisa de Ajuda ?</h1>
            <div class="">
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
            <div class="">
              <Card
                :title="'e-mail'"
                :bgColor="'#F38C18'"
                />
              <Card
                :title="'endereços'"
                :bgColor="'#F38C18'"
                />
            </div>
          </div>
        </div>
        <div class="column is-6">
          <h1>Quer ajudar ?</h1>
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
  </div>
</section>
</template>
<script>
import Card from '@/components/Card.vue';

export default {
  name: 'Container',
  components: {
    Card,
  },
};
</script>
