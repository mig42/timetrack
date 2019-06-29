<template>
  <v-card class="fill-height">
    <v-card-text>
      <div class="d-flex row">
        <v-text-field v-model.number="taskId"
                      label="TTS ID"
                      clearable
                      type="number"
                      :disabled="running"
                      @input="$emit('input', taskId)"
        />
        <v-btn v-if="!running"
               color="success"
               large
               :disabled="!taskId"
               @click="start"
        >
          Start
        </v-btn>
        <v-btn v-if="running"
               color="error"
               large
               @click="stop"
        >
          Stop
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TimerControl',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    running: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      taskId: 0,
    };
  },
  methods: {
    start() {
      this.$emit('start');
    },
    stop() {
      this.$emit('stop');
    },
  },
};
</script>
