<template>
  <v-navigation-drawer :value="isDrawerOpen" app temporary @input="drawerChanged($event)">
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar v-if="isLoggedIn">
            <img :src="`https://ui-avatars.com/api/?name=${encodeURI(user)}`">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-if="isLoggedIn">
              {{ user }}
            </v-list-tile-title>
            <v-list-tile-title v-else>
              Welcome!
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider />

      <v-list-tile v-if="!isLoggedIn">
        <v-list-tile-action>
          <v-icon>lock</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Log in</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-else>
        <v-list-tile-action>
          <v-icon>lock_open</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Log out</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Drawer',
  props: {
    isDrawerOpen: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn', 'user']),
  },
  methods: {
    drawerChanged(newValue) {
      this.$emit('update:isDrawerOpen', newValue);
    },
  },
};
</script>
