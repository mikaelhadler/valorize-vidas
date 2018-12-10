<template>
  <div>
    <label :for="title">
        <font-awesome-icon
          v-if="icon"
          :icon="icon" />
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
