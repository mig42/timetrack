<template>
  <v-footer app height="auto" color="primary lighten-3">
    <v-layout justify-center row wrap>
      <v-flex py-3 text-xs-center white--text xs12>
        <external-link href="https://github.com/mig42">
          mig42
        </external-link> –
        <external-link href="https://www.gnu.org/licenses/gpl-3.0.html">
          GNU GPLv3
        </external-link>
        – {{ new Date().getFullYear() }}
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
import ExternalLink from './AppFooter/ExternalLink';

export default {
  name: 'AppFooter',
  components: {
    ExternalLink,
  },
};
</script>
