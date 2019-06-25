<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <Timer />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Banner from './Tracker/Banner';
import Timer from './Tracker/Timer';

export default {
  name: 'Tracker',
  components: {
    Banner,
    Timer,
  },
};
</script>
