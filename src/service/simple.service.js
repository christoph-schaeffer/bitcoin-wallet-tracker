import apiService from '.';

const resource = 'q';

export default {
  get: (type) => apiService.get(resource, type),

  getDifficulty: () => apiService.get(resource, 'getdifficulty'),
  getBlockCount: () => apiService.get(resource, 'getblockcount'),
  getBcPerBlock: () => apiService.get(resource, 'bcperblock'),
  getTotalBc: () => apiService.get(resource, 'totalbc'),
  getInterval: () => apiService.get(resource, 'interval'),

  getAddressBalance: (address) => this.apiService(resource, `addressbalance/${address}`),
  getAddressFirstSeen: (address) => this.apiService(resource, `addressfirstseen/${address}`),

  get24HrPrice: () => apiService.get(resource, '24hrprice'),
  getMarketCap: () => apiService.get(resource, 'marketcap'),
  get24HrTransactionCount: () => apiService.get(resource, '24hrtransactioncount'),
  get24HrBtcSent: () => apiService.get(resource, '24hrbtcsent'),
  getHashrate: () => apiService.get(resource, 'hashrate'),
};
