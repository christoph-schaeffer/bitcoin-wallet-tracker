import ApiService from '.';

const resource = 'q';

export default {
  get: type => ApiService.get(resource, type),
  getMarketCap: () => ApiService.get(resource, 'marketcap'),
  getTotalBc: () => ApiService.get(resource, 'totalbc'),
  get24HrTransactionCount: () => ApiService.get(resource, '24hrtransactioncount'),
  get24HrBtcSent: () => ApiService.get(resource, '24hrbtcsent'),
  getHashrate: () => ApiService.get(resource, 'hashrate'),
  getDifficulty: () => ApiService.get(resource, 'getdifficulty'),
};
