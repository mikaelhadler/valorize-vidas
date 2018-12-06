<template>
  <div>
    <label :for="title">
        <font-awesome-icon :icon="icon" />
      {{ title }}
    </label>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: ['title', 'icon', 'bgColor']
}
</script>

