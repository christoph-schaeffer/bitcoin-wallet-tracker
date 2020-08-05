import SimpleService from '@/service/simple.service';

export default {
  fetchDifficulty: ({ commit }) => SimpleService.getDifficulty()
    .then(({ data }) => {
      commit('setDifficulty', parseFloat(data));
    }),
  fetchBlockCount: ({ commit }) => SimpleService.getBlockCount()
    .then(({ data }) => {
      commit('setBlockCount', parseFloat(data));
    }),
  fetchBcPerBlock: ({ commit }) => SimpleService.getBcPerBlock()
    .then(({ data }) => {
      commit('setBcPerBlock', parseFloat(data));
    }),
  fetchTotalBc: ({ commit }) => SimpleService.getTotalBc()
    .then(({ data }) => {
      commit('setTotalBc', parseFloat(data));
    }),
  fetchProbability: ({ commit }) => SimpleService.getProbability()
    .then(({ data }) => {
      commit('setProbability', parseFloat(data));
    }),
  fetchInterval: ({ commit }) => SimpleService.getInterval()
    .then(({ data }) => {
      commit('setInterval', parseFloat(data));
    }),
  fetchPrice24Hr: ({ commit }) => SimpleService.get24HrPrice()
    .then(({ data }) => {
      commit('setPrice24Hr', parseFloat(data));
    }),
  fetchMarketCap: ({ commit }) => SimpleService.getMarketCap()
    .then(({ data }) => {
      commit('setMarketCap', parseFloat(data));
    }),
  fetchTransactionCount24Hr: ({ commit }) => SimpleService.get24HrTransactionCount()
    .then(({ data }) => {
      commit('setTransactionCount24Hr', parseFloat(data));
    }),
  fetchBtcSent24Hr: ({ commit }) => SimpleService.get24HrBtcSent()
    .then(({ data }) => {
      commit('setBtcSent24Hr', parseFloat(data) / 100000000);
    }),
  fetchHashRate: ({ commit }) => SimpleService.getHashrate()
    .then(({ data }) => {
      commit('setHashRate', parseFloat(data));
    }),
  fetchAll: ({ dispatch }) => Promise.all([
    dispatch('fetchDifficulty'),
    dispatch('fetchBlockCount'),
    dispatch('fetchBcPerBlock'),
    dispatch('fetchTotalBc'),
    dispatch('fetchInterval'),
    dispatch('fetchPrice24Hr'),
    dispatch('fetchMarketCap'),
    dispatch('fetchTransactionCount24Hr'),
    dispatch('fetchBtcSent24Hr'),
    dispatch('fetchHashRate'),
  ]),
};
