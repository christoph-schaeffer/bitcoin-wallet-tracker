import ApiService from '.';

const resource = 'q';

export default {
  get: type => ApiService.get(resource, type),

  getDifficulty: () => this.get(resource, 'getdifficulty'),
  getBlockCount: () => this.get(resource, 'getblockcount'),
  getBcPerBlock: () => this.get(resource, 'bcperblock'),
  getTotalBc: () => this.get(resource, 'totalbc'),
  getProbability: () => this.get(resource, 'probability'),
  getInterval: () => this.get(resource, 'interval'),

  getAddressBalance: (address) => this.ApiService(resource, `addressbalance/${address}`),
  getAddressFirstSeen: (address) => this.ApiService(resource, `addressfirstseen/${address}`),


  get24HrPrice: () => this.get(resource, '24hrprice'),
  getMarketCap: () => this.get(resource, 'marketcap'),
  get24HrTransactionCount: () => this.get(resource, '24hrtransactioncount'),
  get24HrBtcSent: () => this.get(resource, '24hrbtcsent'),
  getHashrate: () => this.get(resource, 'hashrate'),
};
