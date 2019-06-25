<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <timer />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Timer from './Tracker/Timer';

export default {
  name: 'Tracker',
  components: {
    Timer,
  },
};
</script>
