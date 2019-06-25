import Vue from 'vue';
import Vuetify from 'vuetify';
import axios from 'axios';

import App from './App';
import db from './datastore';
import router from './router';
import store from './store';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.db = Vue.prototype.$db = db;
Vue.config.productionTip = false;

Vue.use(Vuetify, {
  iconfont: 'md',
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
