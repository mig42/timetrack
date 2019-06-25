<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <Banner />
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12>
        <Timer />
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12>
        <Footer />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Banner from './Tracker/Banner';
import Timer from './Tracker/Timer';
import Footer from './Tracker/Footer';

export default {
  name: 'Tracker',
  components: {
    Banner,
    Timer,
    Footer,
  },
};
</script>
