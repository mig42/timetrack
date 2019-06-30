<template>
  <v-container grid-list-lg>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm10 md9 lg6>
        <display :elapsed="elapsedSeconds" />
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm10 md9 lg6>
        <timer-control v-model="taskId"
                       :running="timers.updateSeconds.isRunning"
                       @start="start"
                       @stop="stop"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Display from './Tracker/Display';
import TimerControl from './Tracker/TimerControl';

export default {
  name: 'Tracker',
  components: {
    TimerControl,
    Display,
  },
  data() {
    return {
      taskId: 0,
      elapsedSeconds: 0,
    };
  },
  timers: {
    updateSeconds: {
      time: 1000,
      autostart: false,
      repeat: true,
    },
  },
  methods: {
    start() {
      this.$timer.start('updateSeconds');
    },
    stop() {
      this.$timer.stop('updateSeconds');
      this.elapsedSeconds = 0;
    },
    updateSeconds() {
      this.elapsedSeconds += 1;
    },
  },
};
</script>
