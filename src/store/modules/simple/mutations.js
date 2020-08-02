export default {
  setDifficulty: (state, payload) => {
    state.difficulty = payload;
  },
  setBlockCount: (state, payload) => {
    state.blockCount = payload;
  },
  setBcPerBlock: (state, payload) => {
    state.bcPerBlock = payload;
  },
  setTotalBc: (state, payload) => {
    state.totalBc = payload;
  },
  setProbability: (state, payload) => {
    state.propability = payload;
  },
  setInterval: (state, payload) => {
    state.interval = payload;
  },
  setPrice24Hr: (state, payload) => {
    state.price24Hr = payload;
  },
  setMarketCap: (state, payload) => {
    state.marketCap = payload;
  },
  setTransactionCount24Hr: (state, payload) => {
    state.transactionCount24Hr = payload;
  },
  setBtcSent24Hr: (state, payload) => {
    state.btcSent24Hr = payload;
  },
  setHashRate: (state, payload) => {
    state.hashRate = payload;
  },
};
