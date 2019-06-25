<template>
  <v-container>
    <v-layout xs12>
      <Banner />
    </v-layout>

    <v-layout xs12>
      <v-flex>
        <Timer />
      </v-flex>
    </v-layout>

    <v-layout xs12>
      <Footer />
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
