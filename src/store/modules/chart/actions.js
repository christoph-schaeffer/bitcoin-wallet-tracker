import ChartService from '@/service/chart.service';

export default {
  fetchChart: ({ commit }, timespan) => ChartService.get('market-price', timespan)
    .then(({ data }) => {
      commit('setDescription', data.description);
      commit('setName', data.name);
      commit('setPeriod', data.period);
      commit('setStatus', data.status);
      commit('setUnit', data.unit);
      commit('setValues', data.values);
    }),
};
