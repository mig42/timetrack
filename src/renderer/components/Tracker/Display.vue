<template>
  <v-card :color="color">
    <v-card-text class="display-4 font-weight-bold text-xs-center">
      {{ hours }}<ticker :is-on="showDots" />{{ minutes }}<ticker :is-on="showDots" />{{ seconds }}
    </v-card-text>
  </v-card>
</template>

<script>
import Ticker from './Display/Ticker';

function padDigits(number) {
  return `${number}`.padStart(2, '0');
}

export default {
  name: 'Display',
  components: {
    Ticker,
  },
  props: {
    elapsed: {
      type: Number,
      default: 0,
    },
    running: {
      type: Boolean,
      default: false,
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
    color() {
      return this.running ? 'accent' : '';
    },
    showDots() {
      return !this.running || this.elapsed % 2 === 1;
    },
  },
};
</script>
