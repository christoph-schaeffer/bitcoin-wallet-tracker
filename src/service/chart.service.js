import Vue from 'vue';

const API_URL = 'https://api.blockchain.info';
const RESOURCE = 'charts';

export default {
  get: (chartType, timespan = '', rollingAverage = '', start = '') => {
    const params = { format: 'json', cors: true };
    if (timespan) {
      params.timespan = timespan;
    }
    if (rollingAverage) {
      params.timespan = rollingAverage;
    }
    if (start) {
      params.timespan = start;
    }

    const url = `${API_URL}/${RESOURCE}/${chartType}`;

    return Vue.axios.get(url, { params })
      .catch((error) => {
        throw new Error(`chart api service ${error}`);
      });
  },
};
