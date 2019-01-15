<template>
<div>
  <section>
    <div class="container">
      <div class="columns">
        <div class="column is-4">
          <figure class="logo">
            <img src="../assets/images/logo-horizontal.svg" alt="Valorize Vidas">
          </figure>
        </div>
        <div class="column is-4">
          <div class="mensagem">
            <p>Pode ficar tranquilo que podemos te ajudar. Entre em contato com a gente da forma como preferir</p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <Card
          :title="'Chat'"
          :icon="'comments-regular'"
          :bgColor="'#F38C18'"
          />
        </div>
        <div class="column">
          <Card
          :title="'Ligue 188'"
          :icon="'mobile-alt-solid'"
          :bgColor="'#F38C18'"
          />
        </div>
        <div class="column">
          <Card
          :title="'Contribuir'"
          :icon="'hand-holding-usd-solid'"
          :bgColor="'#E8AE28'"
          />
        </div>
        <div class="column">
          <Card
          :title="'Voluntariar'"
          :icon="'hand-holding-heart-solid'"
          :bgColor="'#F7C248'"
          />
        </div>
      </div>
      <div class="columns">
        <div class="column is-3">
          <Card
          :title="'Email'"
          :bgColor="'#F38C18'"
          />
        </div>
        <div class="column">
          <Card
          :title="'Endereços'"
          :bgColor="'#F38C18'"
          />
        </div>
      </div>
    </div>
  </section>
</div>
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
