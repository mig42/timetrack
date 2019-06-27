<template>
  <v-footer app height="auto" color="primary lighten-3">
    <v-layout justify-center row wrap>
      <v-flex py-3 text-xs-center white--text xs12>
        <a href="https://github.com/mig42">mig42</a> –
        <a href="https://www.gnu.org/licenses/gpl-3.0.html">GNU GPLv3</a>
        – {{ new Date().getFullYear() }}
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>
