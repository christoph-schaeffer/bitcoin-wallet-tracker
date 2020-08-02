import SimpleService from '@/service/simple.service';

export default {
  fetchDifficulty: ({ commit }) => {
    return SimpleService.getDifficulty()
      .then(({ data }) => {
        commit('setDifficulty', data);
      });
  },
  fetchBlockCount: ({ commit }) => {
    return SimpleService.getBlockCount()
      .then(({ data }) => {
        commit('setBlockCount', data);
      });
  },
  fetchBcPerBlock: ({ commit }) => {
    return SimpleService.getBcPerBlock()
      .then(({ data }) => {
        commit('setBcPerBlock', data);
      });
  },
  fetchTotalBc: ({ commit }) => {
    return SimpleService.getTotalBc()
      .then(({ data }) => {
        commit('setTotalBc', data);
      });
  },
  fetchProbability: ({ commit }) => {
    return SimpleService.getProbability()
      .then(({ data }) => {
        commit('setProbability', data);
      });
  },
  fetchInterval: ({ commit }) => {
    return SimpleService.getInterval()
      .then(({ data }) => {
        commit('setInterval', data);
      });
  },
  fetchPrice24Hr: ({ commit }) => {
    return SimpleService.get24HrPrice()
      .then(({ data }) => {
        commit('setPrice24Hr', data);
      });
  },
  fetchMarketCap: ({ commit }) => {
    return SimpleService.getMarketCap()
      .then(({ data }) => {
        commit('setMarketCap', data);
      });
  },
  fetchTransactionCount24Hr: ({ commit }) => {
    return SimpleService.get24HrTransactionCount()
      .then(({ data }) => {
        commit('setTransactionCount24Hr', data);
      });
  },
  fetchBtcSent24Hr: ({ commit }) => {
    return SimpleService.get24HrBtcSent()
      .then(({ data }) => {
        commit('setBtcSent24Hr', data);
      });
  },
  fetchHashRate: ({ commit }) => {
    return SimpleService.getHashrate()
      .then(({ data }) => {
        commit('setHashRate', data);
      });
  },
};
