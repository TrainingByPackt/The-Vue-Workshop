<template>
  <div class="message-wrapper">
    <p class="message-content">
      {{ content }}
      <small>12.8.2019</small>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
