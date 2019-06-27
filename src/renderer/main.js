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
});

Vue.use(VueTimers);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
