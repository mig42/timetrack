<template>
  <v-card>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card flat tile>
            <v-layout row wrap>
              <v-flex md6>
                <div class="d-flex row">
                  <v-text-field v-model="id"
                                label="TTS ID"
                                clearable
                                type="number"
                                :disabled="timers.updateSeconds.isRunning"
                  />
                  <v-btn v-if="!timers.updateSeconds.isRunning"
                         color="success"
                         large
                         :disabled="!id"
                         @click="start"
                  >
                    Start
                  </v-btn>
                  <v-btn v-if="timers.updateSeconds.isRunning"
                         color="error"
                         large
                         @click="stop"
                  >
                    Stop
                  </v-btn>
                </div>
              </v-flex>

              <v-flex xs6>
                {{ hours }} : {{ minutes }} : {{ seconds }}
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
function padDigits(number) {
  return `${number}`.padStart(2, '0');
}

export default {
  name: 'Timer',
  data() {
    return {
      id: 0,
      elapsedSeconds: 0,
    };
  },
  computed: {
    hours() {
      return padDigits(Math.floor(this.elapsedSeconds / 3600));
    },
    minutes() {
      return padDigits(Math.floor(this.elapsedSeconds / 60) % 60);
    },
    seconds() {
      return padDigits(this.elapsedSeconds % 60);
    },
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
      this.elapsedSeconds = 0;
      this.$timer.start('updateSeconds');
    },
    stop() {
      this.elapsedSeconds = 0;
      this.$timer.stop('updateSeconds');
    },
    updateSeconds() {
      this.elapsedSeconds += 1;
    },
  },
};
</script>
