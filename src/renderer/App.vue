<template>
  <v-app id="root">
    <toolbar />
    <v-content>
      <v-container fluid>
        <v-layout row>
          <v-flex xs12>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar';
import AppFooter from './components/AppFooter';

export default {
  name: 'timetrack',
  components: {
    Toolbar,
    AppFooter,
  },
};
</script>

<style lang="stylus">
@import './style/main'
</style>
