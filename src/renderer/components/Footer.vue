<template>
  <v-footer app class="pa-3">
    <strong>TimeTrack</strong> by <a href="https://github.com/mig42">Miguel González</a>
    – <i>{{ year }}</i> –
    The source code is licensed <a href="https://www.gnu.org/licenses/gpl-3.0.html">GNU GPLv3</a>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
