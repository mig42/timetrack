import axios from 'axios';

const LOGIN_START = '🔒 Login start';
const LOGIN_FAIL = '🔒❌ Login fail';
const LOGIN_SUCCESS = '🔒✔ Login success';
const LOGOUT = '🔓 Logout';

const state = {
  user: localStorage.getItem('user'),
  password: localStorage.getItem('password'),
  status: 'Anonymous user',
};

const mutations = {
  [LOGIN_START](state) {
    state.status = 'Logging in...';
  },
  [LOGIN_FAIL](state, message) {
    state.status = `Login failed: ${message}`;
  },
  [LOGIN_SUCCESS](state, user, password) {
    state.status = 'Login OK!';
    state.user = user;
    state.password = password;
  },
  [LOGOUT](state) {
    state.status = 'Anonymous user';
    state.user = '';
    state.password = '';
  },
};

const getters = {
  isLoggedIn: state => !!state.password,
  user: state => state.user,
};

const actions = {
  async login({ commit }, user, password) {
    commit(LOGIN_START);
    const auth = { user, password };
    try {
      await axios.get('/', { auth });
    } catch (exception) {
      commit(LOGIN_FAIL, exception.message);
    }

    localStorage.setItem('user', user);
    localStorage.setItem('password', password);
    axios.defaults.auth = auth;
    commit(LOGIN_SUCCESS, user, password);
  },
  async logout({ commit }) {
    commit(LOGOUT);
    return new Promise((resolve) => {
      localStorage.removeItem('user');
      localStorage.removeItem('password');
      delete axios.defaults.auth;
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
