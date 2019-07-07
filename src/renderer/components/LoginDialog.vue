<template>
  <v-dialog v-model="dialog" persistent max-width="600">
    <v-card>
      <v-card-title class="headline">
        Log in to TTS
      </v-card-title>
      <v-card-text>
        Please enter your credentials to start tracking your time.
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="green darken-1" flat @click="login">
          Log in
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'LoginDialog',
  data() {
    return {
      dialog: true,
    };
  },
  methods: {
    login() {
      // TODO
    },
  },
};
</script>
