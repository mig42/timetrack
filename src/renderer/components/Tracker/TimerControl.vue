<template>
  <v-card>
    <v-card-text>
      <v-container>
        <v-layout row>
          <v-flex grow>
            <div class="d-flex row">
              <v-text-field v-model.number="taskId"
                            label="TTS ID"
                            clearable
                            :rules="[rules.required, rules.numeric, rules.natural]"
                            :disabled="running"
                            @update:error="val => isInputInvalid = val"
                            @input="debouncedUpdateValue"
              />
            </div>
          </v-flex>
          <v-flex shrink>
            <v-btn v-if="!running"
                   color="primary"
                   large
                   class="mx-0"
                   :disabled="!taskId || isInputInvalid"
                   @click="start"
            >
              Start
            </v-btn>
            <v-btn v-if="running"
                   color="error"
                   large
                   class="mx-0"
                   @click="stop"
            >
              Stop
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { debounce } from 'lodash';

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
      isInputInvalid: true,
      taskId: null,
      rules: {
        required: value => !!value || 'Required.',
        numeric: value => value === ''
          || !Number.isNaN(parseInt(value, 10))
          || 'Value must be a number.',
        natural: value => value > 0 || 'Value must be greater than zero.',
      },
    };
  },
  created() {
    this.debouncedUpdateValue = debounce(this.updateValue, 250);
  },
  methods: {
    start() {
      this.$emit('start');
    },
    stop() {
      this.$emit('stop');
    },
    updateValue() {
      if (this.isInputInvalid) {
        return;
      }
      this.$emit('input', this.taskId);
    },
  },
};
</script>
