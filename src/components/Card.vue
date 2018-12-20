<template>
  <div class="card-valorize" v-bind:style = "{'background-color': bgColor}">
    <figure class="icone" v-if="icon">
      <img :src="require(`@/assets/${icon}.svg`)">
    </figure>
    <label :for="title">
      {{ title }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['title', 'icon', 'bgColor'],
};
</script>
