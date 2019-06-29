<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-container fluid fill-height ma-0 pa-0>
          <v-layout row wrap ma-0 pa-0>
            <v-flex ma-0 pa-0>
              <timer-control v-model="taskId"
                             :running="timers.updateSeconds.isRunning"
                             @start="start"
                             @stop="stop"
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12 md6>
        <v-container fluid fill-height ma-0 pa-0>
          <v-layout row wrap ma-0 pa-0>
            <v-flex ma-0 pa-0>
              <display :elapsed="elapsedSeconds" />
            </v-flex>
          </v-layout>
        </v-container>
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
