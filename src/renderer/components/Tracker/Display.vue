<template>
  <v-card class="fill-height">
    <v-card-text>
      {{ hours }} : {{ minutes }} : {{ seconds }}
    </v-card-text>
  </v-card>
</template>

<script>
function padDigits(number) {
  return `${number}`.padStart(2, '0');
}

export default {
  name: 'TimerControl',
  props: {
    elapsed: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    hours() {
      return padDigits(Math.floor(this.elapsed / 3600));
    },
    minutes() {
      return padDigits(Math.floor(this.elapsed / 60) % 60);
    },
    seconds() {
      return padDigits(this.elapsed % 60);
    },
  },
};
</script>
