<template>
  <section class="">
    <div class="">
      <Banner />
    </div>

    <div class="">
      <div class="">
        <div class="">
          <div class="">
            <Timer />
          </div>
        </div>
      </div>
    </div>

    <div class="">
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
