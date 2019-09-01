<template>
  <div id="app">
    <Message content="This text is not hardcoded" />
  </div>
</template>

<script>
import Message from './components/Message.vue';

export default {
  name: 'app',
  components: {
    Message,
  },
};
</script>
