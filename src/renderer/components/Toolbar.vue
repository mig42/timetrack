<template>
  <v-toolbar app color="primary">
    <v-toolbar-title>
      <div class="d-flex align-center">
        <v-icon x-large>
          alarm
        </v-icon>
        <h1 class="display-1 font-weight-bold font-italic pr-2">
          TimeTrack
        </h1>
      </div>
    </v-toolbar-title>
    <v-spacer />
    <div v-if="isLoggedIn">
      {{ user }}
    </div>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Toolbar',
  computed: {
    ...mapGetters('auth', ['isLoggedIn', 'user']),
  },
};
</script>
