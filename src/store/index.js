import Vue from 'vue';
import Vuex from 'vuex';

import layout from '@/store/modules/layout';
import ticker from '@/store/modules/ticker';
import simple from '@/store/modules/simple';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layout,
    ticker,
    simple,
  },
});
