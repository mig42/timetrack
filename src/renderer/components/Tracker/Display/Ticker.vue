<template>
  <span :class="{ hidden: !isOn }">:</span>
</template>

<script>
export default {
  name: 'Ticker',
  props: {
    isOn: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
.hidden
  visibility hidden
</style>
