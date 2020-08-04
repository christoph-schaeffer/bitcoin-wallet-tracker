import apiService from '.';

const RESOURCE = 'q';

export default {
  get: (type) => apiService.get(RESOURCE, type),

  getDifficulty: () => apiService.get(RESOURCE, 'getdifficulty'),
  getBlockCount: () => apiService.get(RESOURCE, 'getblockcount'),
  getBcPerBlock: () => apiService.get(RESOURCE, 'bcperblock'),
  getTotalBc: () => apiService.get(RESOURCE, 'totalbc'),
  getInterval: () => apiService.get(RESOURCE, 'interval'),

  getAddressBalance: (address) => apiService.get(RESOURCE, `addressbalance/${address}`),

  get24HrPrice: () => apiService.get(RESOURCE, '24hrprice'),
  getMarketCap: () => apiService.get(RESOURCE, 'marketcap'),
  get24HrTransactionCount: () => apiService.get(RESOURCE, '24hrtransactioncount'),
  get24HrBtcSent: () => apiService.get(RESOURCE, '24hrbtcsent'),
  getHashrate: () => apiService.get(RESOURCE, 'hashrate'),
};
