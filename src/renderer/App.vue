<template>
  <v-app id="root">
    <toolbar />
    <v-content>
      <v-container fluid>
        <v-layout row justify-center>
          <login-dialog v-if="!isLoggedIn" />
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
import { mapGetters } from 'vuex';
import AppFooter from './components/AppFooter';
import LoginDialog from './components/LoginDialog';
import Toolbar from './components/Toolbar';

export default {
  name: 'Timetrack',
  components: {
    AppFooter,
    LoginDialog,
    Toolbar,
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
  },
};
</script>

<style lang="stylus">
@import './style/main'
</style>
