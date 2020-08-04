import Vue from 'vue';
import localizedNumber from './localizedNumber';
import btcToSatoshi from './btcToSatoshi';

export default {
  init() {
    Vue.filter('localizedNumber', localizedNumber);
    Vue.filter('btcToSatoshi', btcToSatoshi);
  },
};
