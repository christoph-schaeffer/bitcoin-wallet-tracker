import TickerService from '@/service/ticker.service';

export default {
  fetchCurrencyRates: ({ commit }) => TickerService.get()
    .then(({ data }) => {
      commit('setCurrencyRates', data);
    }),
};
