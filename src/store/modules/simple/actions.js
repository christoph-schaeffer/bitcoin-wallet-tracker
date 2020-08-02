import SimpleService from '@/service/simple.service';

export default {
  fetchMarketCap: ({ commit }) => {
    return SimpleService.get()
      .then(({ data }) => {
        commit('setMarketCap', data);
      });
  },
  fetchTotalBc: ({ commit }) => {
    return SimpleService.get()
      .then(({ data }) => {
        commit('setTotalBc', data);
      });
  },
  fetchTransactionCount24Hr: ({ commit }) => {
    return SimpleService.get()
      .then(({ data }) => {
        commit('setTransactionCount24Hr', data);
      });
  },
  fetchBtcSent24Hr: ({ commit }) => {
    return SimpleService.get()
      .then(({ data }) => {
        commit('setBtcSent24Hr', data);
      });
  },
  fetchHashRate: ({ commit }) => {
    return SimpleService.get()
      .then(({ data }) => {
        commit('setHashRate', data);
      });
  },
  fetchDifficulty: ({ commit }) => {
    return SimpleService.get()
      .then(({ data }) => {
        commit('setDifficulty', data);
      });
  },
};
