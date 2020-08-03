import Vue from 'vue';
import localizedNumber from './localizedNumber';

export default {
  init() {
    Vue.filter('localizedNumber', localizedNumber);
  },
};
