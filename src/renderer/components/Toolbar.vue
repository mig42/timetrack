<template>
  <v-toolbar app color="primary">
    <v-toolbar-side-icon @click="toggleDrawer" />
    <v-toolbar-title>
      <h1 class="display-1 font-weight-bold font-italic pr-2">
        TimeTrack
      </h1>
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
  props: {
    isDrawerOpen: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn', 'user']),
  },
  methods: {
    toggleDrawer() {
      this.$emit('update:isDrawerOpen', !this.isDrawerOpen);
    },
  },
};
</script>
