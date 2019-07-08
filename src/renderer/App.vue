<template>
  <v-app id="root">
    <drawer :is-drawer-open.sync="isDrawerOpen" />
    <toolbar :is-drawer-open.sync="isDrawerOpen" />
    <v-content>
      <v-container fluid>
        <v-layout row justify-center>
          <v-flex xs12>
            <router-view />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import AppFooter from './components/AppFooter';
import Drawer from './components/Drawer';
import Toolbar from './components/Toolbar';

export default {
  name: 'Timetrack',
  components: {
    AppFooter,
    Drawer,
    Toolbar,
  },
  data() {
    return {
      isDrawerOpen: false,
    };
  },
};
</script>

<style lang="stylus">
@import './style/main'
</style>
