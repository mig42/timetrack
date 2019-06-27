<template>
  <a @click="openLink">
    <slot />
  </a>
</template>

<script>
import { shell } from 'electron';

export default {
  name: 'ExternalLink',
  props: {
    href: {
      type: String,
      default: '',
    },
  },
  methods: {
    openLink() {
      shell.openExternal(this.href);
    },
  },
};
</script>
