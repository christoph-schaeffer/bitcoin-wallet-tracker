import Vue from 'vue';
import Vuex from 'vuex';

import layout from '@/store/modules/layout';
import ticker from '@/store/modules/ticker';
import simple from '@/store/modules/simple';
import chart from '@/store/modules/chart';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layout,
    ticker,
    simple,
    chart,
  },
});
