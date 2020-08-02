import TickerService from '@/service/ticker.service';

export default {
  fetchCurrencyRates: ({ commit }) => {
    commit('fetchStart');
    return TickerService.get()
      .then(({ data }) => {
        commit('setCurrencyRates', data);
        commit('fetchEnd');
      });
  },
};
