import Vue from 'vue';
import localizedNumber from './localizedNumber';
import localizedDate from './localizedDate';
import btcToSatoshi from './btcToSatoshi';

export default {
  init() {
    Vue.filter('localizedNumber', localizedNumber);
    Vue.filter('localizedDate', localizedDate);
    Vue.filter('btcToSatoshi', btcToSatoshi);
  },
};
