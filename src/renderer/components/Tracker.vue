<template>
  <section class="hero">
    <div class="hero-head">
      <Banner />
    </div>

    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <Timer />
          </div>
        </div>
      </div>
    </div>

    <div class="hero-foot">
      <Footer />
    </div>
  </section>
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

<style scoped>
.h-100 {
  height: 100%;
}
</style>
