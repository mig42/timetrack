<template>
  <footer class="">
    <div class="">
      <p>
        <strong>TimeTrack</strong> by <a href="https://github.com/mig42">Miguel González</a>
        – <i>{{ year }}</i> –
        The source code is licensed <a href="https://www.gnu.org/licenses/gpl-3.0.html">GNU GPLv3</a>
      </p>
    </div>
  </footer>
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
