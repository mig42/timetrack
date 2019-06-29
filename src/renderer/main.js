import Vue from 'vue';
import Vuetify from 'vuetify';
/* eslint-disable import/no-extraneous-dependencies */
import VueTimers from 'vue-timers';
import axios from 'axios';

import App from './App';
import db from './datastore';
import router from './router';
import store from './store';

/* eslint-disable import/no-extraneous-dependencies */
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.db = Vue.prototype.$db = db;
Vue.config.productionTip = false;

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#10be6a',
    secondary: '#545454',
    tertiary: '#ffa015',
    accent: '#8eec14',
    error: '#f55a4e',
    info: '#00d3ee',
    success: '#5cb860',
    warning: '#ffa21a',
  },
});

Vue.use(VueTimers);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
