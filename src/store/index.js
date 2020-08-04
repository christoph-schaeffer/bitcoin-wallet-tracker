import Vue from 'vue';
import Vuex from 'vuex';

import layout from '@/store/modules/layout';
import ticker from '@/store/modules/ticker';
import simple from '@/store/modules/simple';
import chart from '@/store/modules/chart';
import balance from '@/store/modules/balance';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layout,
    ticker,
    simple,
    chart,
    balance,
  },
});
